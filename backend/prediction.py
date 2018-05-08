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
# dates we are interested in
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
                                   {"dd": 1, "month": 1, "date": 1, "temp_max": 1, "temp_min": 1, "temp_mean": 1}).sort('date')

#ts = db.HistoricalWeatherData.find({"city_code": 'KNYC', 'date': {'$lt': fromDate}, 'dd': {'$in': dds}}).sort('date')
tsDf = pd.DataFrame(list(ts))

# adds prior days temp (min, max, mean) to the data frame (prior day temp predictors)
for p in ['temp_max', 'temp_min', 'temp_mean']:
    for N in range(1, 10):
        add_prior(tsDf, p, N)

monthTsDf = tsDf[tsDf.month == monthName]
monthTsDf = monthTsDf.replace('', numpy.NaN)
monthTsDf = monthTsDf.dropna(axis=0)

# df1 = db.df1
# df1.insert_many(monthTsDf.to_dict('records'))

# construct a test (prediction) set
ps = db.HistoricalWeatherData.find({'city_code': cityCode, 'date': {'$gt': fromDate, '$lte': toDate}},
                                   {"dd": 1, "month": 1, "date": 1, "temp_max": 1, "temp_min": 1, "temp_mean": 1, "hdd":1}).sort('date')

#ps = db.HistoricalWeatherData.find({'city_code': 'KNYC', 'date': {'$gt': fromDate, '$lte': toDate}}).sort('date')


psDf = pd.DataFrame(list(ps))

# adds prior days temp (min, max, mean) to the data frame (prior day temp predictors)
for p in ['temp_max', 'temp_min', 'temp_mean']:
    for N in range(1, 10):
        add_prior(psDf, p, N)

monthPsDf = psDf[psDf.month == monthName]

# adds historical avgs predictors, rename the columns to avoid name collision
avgs = db.HistoricalWeatherData_avg.find({"city_code": cityCode, 'dd': {'$in': dds}})
avgsDf = pd.DataFrame(list(avgs))
avgsDf = avgsDf.rename(index=str, columns={'temp_max': 'temp_max_avg', 'temp_min': 'temp_min_avg', 'temp_mean': 'temp_mean_avg'})

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
# convert the end date to a month code http://www.cmegroup.com/month-codes.html
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

actual = db.HDD.find({"city_code": cityCode, "index_code": 'G18'}).sort("Business Date")
actualDf = pd.DataFrame(list(actual))
print(actualDf['SecurityDescription'].unique())

# 2. the actual month end index value
# (we calculate it ourselves based on our available temperature data and not use HDD Index values reported by MDA
# Federal Information Systems as CME Exchange does)
print('End value:', monthPsDf['hdd'].sum())

# 3. market price for the month
xs = dt.strptime('2018-01-01', '%Y-%m-%d')
xe = dt.strptime('2018-01-31', '%Y-%m-%d')
#print(actualDf[['Business Date','Price']])

# 4. our predicted weather day-by-day (removing data that wouldn't be available)
# instantiate the regressor class
regressor = LinearRegression()
allresults = {}
for j in range( 0, (ed - sd).days+1):
    #print (sd + timedelta(days=i))

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
    results.extend(prediction)
    #delete row which we don't need anymore
    X_testCopy = X_testCopy.drop([0])

    #preditction for the first 10 days of the chosen month
    ln = 10 if len(X_testCopy.index) > 10 else len(X_testCopy.index)
    for i in range(1, ln):
        features = ["{}_{}".format(x, i) for x in ['temp_max', 'temp_min', 'temp_mean']]
        X_trainCopy = X_trainCopy.drop(features, axis=1)
        # fit the build the model by fitting the regressor to the training data
        regressor.fit(X_trainCopy, y_trainCopy)
        X_testCopy = X_testCopy.drop(features,axis=1)
        # make a prediction set using the test set
        prediction = regressor.predict(X_testCopy[X_testCopy.index == i])
        results.extend(prediction)
        #delete rows which we don't need anymore
        X_testCopy = X_testCopy.drop([i])

        print("prediction "+str(i), prediction)
        print ("j= ", j,"i= ",i)

    if len(X_testCopy.index) > 0:
        regressor.fit(X_trainCopy, y_trainCopy)
        prediction = regressor.predict(X_testCopy)
        results.extend(prediction)
    #print(results)
    hdd = [ (0 if x > 65 else 65-x) for x in results]
    #print(hdd)
    #print ('sum ', sum(hdd))
    allresults[dt.strftime(sd + timedelta(days=j), '%Y-%m-%d')] = {
        'mean_temp': numpy.array2string(numpy.array(results), precision=1, max_line_width=numpy.inf),
        'hdd': numpy.array2string(numpy.array(hdd), precision=1, max_line_width=numpy.inf),
        'sum': "{:.1f}".format(sum(hdd))}
print(allresults)
response = {"status": 200, "data": allresults}
json_data = json.dumps(response)
print ("jsonresult:"+json_data)
# Evaluate the prediction accuracy of the model
#from sklearn.metrics import mean_absolute_error, median_absolute_error

#print("The Explained Variance: %.2f" % regressor.score(X_test, y_test))
#print("The Mean Absolute Error: %.2f degrees celsius" % mean_absolute_error(y_test.sort_index(), prediction))
#print("The Median Absolute Error: %.2f degrees celsius" % median_absolute_error(y_test.sort_index(), prediction))

