#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Mar 26 22:14:38 2018
The main temperature prediction script
It's called with city_code and a date range and it computes LinearRegression prediction for the rest of the month
based on the available to us predictors we pre-selected (previous 10 days temp and historical averages for that day)
@author: agni
"""
import warnings

warnings.simplefilter(action='ignore', category=FutureWarning)

from pymongo import MongoClient
from datetime import datetime as dt
from datetime import timedelta

import pandas as pd
import numpy
import json
import sys

startDate = sys.argv[1]
endDate = sys.argv[2]
cityCode = sys.argv[3]

client = MongoClient()
db = client.weatherData
sd = dt.strptime(startDate, '%Y-%m-%d')
ed = dt.strptime(endDate, '%Y-%m-%d')

# take the data from the time requested - 10 days used for prediction
fromDate = sd - timedelta(days=10)
toDate = ed + timedelta(days=1)

date_range = pd.date_range(startDate, endDate)

'''
    We need to construct 2 dataframes
    One is a training set for our linear regression algorithm that contains historical data and outcomes
    training set  
    Historical dates            |          our chosen predictors                 |  outcome
    for city/months selected    | temp day-1...temp day-10.. avg 15yrs.. avg all |  mean_temp
    ---------------------------------------------------------------------------------------------
    1977-11-20                  |                                                |  36
    ...                         |                                                |  42
    1977-12-01
    ...
    2016-12-31
    the other one is a test set(s) with dates we are interested in predicting 
    Dates of interest          |                    predictors                   |  predicted
    for city/months selected   |   same as chosen for the training set           |  mean_temp   
    ----------------------------------------------------------------------------------------------
    2017-12-01                 |                                                 |  ?
    ...                        |                                                 |  ?
    2017-12-31                 |                                                 |  ?
'''
# historical dates we are interested in ( -10 days to get the weather before those days for our analyses
dds = list(
    db.HistoricalWeatherData.find({'city_code': cityCode, 'date': {'$gt': fromDate, '$lte': toDate}, }).distinct("dd"))
print("days needed ", dds)

# the name of the months we are interested in
monthName = ed.strftime('%b')
print("month: ", monthName)


# utility function to add prior dates to a dataframe
def add_prior(df, feature, N):
    rows = df.shape[0]
    nth_prior = [None] * N + [df[feature][i - N] for i in range(N, rows)]
    col_name = "{}_{}".format(feature, N)
    df[col_name] = nth_prior


# construct a training set
ts = db.HistoricalWeatherData.find({"city_code": cityCode, 'date': {'$lt': fromDate}, 'dd': {'$in': dds}},
                                   {"dd": 1, "month": 1, "date": 1, "temp_max": 1, "temp_min": 1, "temp_mean": 1}).sort(
    'date')

tsDf = pd.DataFrame(list(ts))
if len(tsDf.index) == 0:
    print('test set is empty')
    print('cityCode ', cityCode)
    print('fromDate ', fromDate)
    print('dds', dds)
else:
    print('training set size', len(tsDf.index))

# error check - if the training set is empty skip linear regression later


# adds prior days temp (min, max, mean) to the data frame (prior day temp predictors)
for p in ['temp_max', 'temp_min', 'temp_mean']:
    for N in range(1, 10):
        add_prior(tsDf, p, N)

monthTsDf = tsDf[tsDf.month == monthName]
monthTsDf = monthTsDf.replace('', numpy.NaN)
monthTsDf = monthTsDf.dropna(axis=0)

# df1 = db.df1
# df1.insert_many(monthTsDf.to_dict('records')) #debugging only

# construct a test (prediction) set
ps = db.HistoricalWeatherData.find({'city_code': cityCode, 'date': {'$gt': fromDate, '$lte': toDate}},
                                   {"dd": 1, "month": 1, "date": 1, "temp_max": 1, "temp_min": 1, "temp_mean": 1,
                                    "hdd": 1}).sort('date')

psDf = pd.DataFrame(list(ps))
# if len(psDf.index) == 0:
# print('test set is empty')
# print('cityCode ',cityCode)
# print('fromDate ',fromDate)
# print('toDate', toDate)
# else:
# print('testing set size', len(psDf.index))
# adds prior days temp (min, max, mean) to the data frame (prior day temp predictors)
for p in ['temp_max', 'temp_min', 'temp_mean']:
    for N in range(1, 10):
        add_prior(psDf, p, N)

monthPsDf = psDf[psDf.month == monthName]

# adds historical avgs predictors, rename the columns to avoid name collision
avgs = db.HistoricalWeatherData_avg.find({"city_code": cityCode, 'dd': {'$in': dds}})
avgsDf = pd.DataFrame(list(avgs))
avgsDf = avgsDf.rename(index=str,
                       columns={'temp_max': 'temp_max_avg', 'temp_min': 'temp_min_avg', 'temp_mean': 'temp_mean_avg'})

monthTsDf = pd.merge(monthTsDf, avgsDf, on=['dd'])
monthPsDf = pd.merge(monthPsDf, avgsDf, on=['dd'])

'''
Using SciKit-Learn LinearRegression Module (http://scikit-learn.org/stable/) analyze our train set
and make a prediction on our test set
'''
from sklearn.linear_model import LinearRegression

predictors = ['temp_max_avg', 'temp_min_avg', 'temp_mean_avg']
for N in range(1, 10):
    for feature in ['temp_max', 'temp_min', 'temp_mean']:
        predictors.append("{}_{}".format(feature, N))

X_train = monthTsDf[predictors]
y_train = monthTsDf['temp_mean']

X_test = monthPsDf[predictors]
y_test = monthPsDf['temp_mean']

# collecting all the relevant display/prediction data

# 1. the selected Future name
# convert the end date to its month code http://www.cmegroup.com/month-codes.html
month_codes = {
    'Jan': 'F',
    'Feb': 'G',
    'Mar': 'H',
    'Apr': 'J',
    'May': 'K',
    'Jun': 'M',
    'Jul': 'N',
    'Aug': 'Q',
    'Sep': 'U',
    'Oct': 'V',
    'Nov': 'X',
    'Dec': 'Z'
}

index_code = month_codes[ed.strftime('%b')] + ed.strftime('%y')
print(index_code)

actual = db.HDD.find({"city_code": cityCode, "index_code": index_code, "date": {'$gt': sd, '$lte': ed}}).sort("date")

actualDf = pd.DataFrame(list(actual))
print(actualDf['SecurityDescription'].unique())

# instantiate the regressor class
regressor = LinearRegression()
predicted_prices = []
allresults = {}
next_day_prediction = []
dates_for_label = []

for j in range(0, (ed - sd).days + 1):
    print(sd + timedelta(days=j))
    dates_for_label.append(dt.strftime(sd + timedelta(days=j), '%d-%b'))

    results = []
    X_trainCopy = X_train.copy()
    y_trainCopy = y_train.copy()
    X_testCopy = X_test.copy()
    if j > 0:
        results.extend(y_test[:j])
        X_testCopy = X_testCopy.drop(range(j))
        X_testCopy.reset_index(drop=True, inplace=True)

    # fit the build the model by fitting the regressor to the training data
    regressor.fit(X_train, y_train)
    # make a prediction set using the test set
    X0_test = X_test[X_test.index == 0]
    prediction = regressor.predict(X0_test)
    next_day_prediction.extend(prediction)
    results.extend(prediction)
    # delete row which we don't need anymore
    X_testCopy = X_testCopy.drop([0])

    # prediction for the first 10 days of the chosen month
    ln = 10 if len(X_testCopy.index) > 10 else len(X_testCopy.index)
    for i in range(1, ln):
        features = ["{}_{}".format(x, i) for x in ['temp_max', 'temp_min', 'temp_mean']]
        X_trainCopy = X_trainCopy.drop(features, axis=1)
        # fit the build the model by fitting the regressor to the training data
        regressor.fit(X_trainCopy, y_trainCopy)
        X_testCopy = X_testCopy.drop(features, axis=1)
        # make a prediction set using the test set
        prediction = regressor.predict(X_testCopy[X_testCopy.index == i])
        results.extend(prediction)
        # delete rows which we don't need anymore
        X_testCopy = X_testCopy.drop([i])

        # print("prediction " + str(i), prediction)
        # print("j= ", j, "i= ", i)

    if len(X_testCopy.index) > 0:
        regressor.fit(X_trainCopy, y_trainCopy)
        prediction = regressor.predict(X_testCopy)
        results.extend(prediction)
    # print(results)
    hdd = [(0 if x > 65 else 65 - x) for x in results]
    # print(hdd)
    # print ('sum ', sum(hdd))
    allresults[dt.strftime(sd + timedelta(days=j), '%Y-%m-%d')] = {
        'mean_temp': numpy.array2string(numpy.array(results), precision=1, max_line_width=numpy.inf),
        'hdd': numpy.array2string(numpy.array(hdd), precision=1, max_line_width=numpy.inf),
        'sum': "{:.1f}".format(sum(hdd))}
    predicted_prices.append(sum(hdd).round(1))

# datasets we send back
# 1-predicted prices for each day
print('predicted prices', predicted_prices)
print('len of predicted prices', len(predicted_prices))

# 2-real market prices
priceValues = actualDf.set_index('date')
priceValues = priceValues.reindex(date_range, fill_value = 'null')
priceValues = priceValues['Price'].values.tolist()
print('price values ', priceValues)

# print('len of actual', actualDf)
# 3-actual price for the end end of the month
flat_line = numpy.full(len(y_test.index), monthPsDf['hdd'].sum()).tolist()
# print(flat_line)
# 4-sum_to_date for HDD
sum_to_date = 0
sum_to_date_arr = []
for index, row in monthPsDf.iterrows():
    sum_to_date += row['hdd']
    sum_to_date_arr.append(sum_to_date)

# print('sum to date hdd',sum_to_date_arr)
# 5
sum_to_date_pred = 0
sum_to_date_pred_arr = []
for u in next_day_prediction:
    sum_to_date_pred += u
    sum_to_date_pred_arr.append(sum_to_date_pred)
# print('next day pred',sum_to_date_pred_arr)
allresults = {"predicted_prices": predicted_prices,
              "actual_prices": priceValues,
              "flat_line": flat_line,
              "sum_to_date_arr": sum_to_date_arr,
              "sum_to_date_pred_arr": sum_to_date_pred_arr,
              "dates_for_label": dates_for_label}

response = {"status": 200, "data": allresults}
json_data = json.dumps(response)
print("jsonresult:" + json_data)

# Evaluate the prediction accuracy of the model
# from sklearn.metrics import mean_absolute_error, median_absolute_error

# print("The Explained Variance: %.2f" % regressor.score(X_test, y_test))
# print("The Mean Absolute Error: %.2f degrees celsius" % mean_absolute_error(y_test.sort_index(), prediction))
# print("The Median Absolute Error: %.2f degrees celsius" % median_absolute_error(y_test.sort_index(), prediction))