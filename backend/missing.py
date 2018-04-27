#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Mar  7 17:31:09 2018

@author: agni
"""
import pandas as pd
#from pandas import DataFrame, read_csv
#from pandas import read_csv
import numpy
import sys
print('ok')
print ('Number of arguments:', len(sys.argv), 'arguments.')
print ('Argument List:', str(sys.argv))
print('ok again')
data = pd.read_csv('../backend/WeatherData_Atlanta.csv',header=0)
print("initial dataset values")
print(data.values)
print("** replace 0s **")
# mark zero values as missing or NaN
data[['date','temp_mean','temp_max','temp_min']] = data[['date','temp_mean','temp_max','temp_min']].replace(0, numpy.NaN)
print (data.values)
# fill missing values with mean column values
data.date=pd.to_datetime(data.date)
data['dd'] = data['date'].map(lambda x: x.strftime('%m-%d'))
 
res = data.groupby('dd') [['dd','temp_mean','temp_max','temp_min']].mean().round(1)
res.insert(0, 'day',  res.index)
res['hdd'] = res['temp_mean'].map( lambda x: 0 if x > 65 else 65-x).round(1)
res['cdd'] = res['temp_mean'].map( lambda x: 0 if x < 65 else x -65).round(1)
print(res)
# count the number of NaN values in each column
print(data.isnull().sum())
#save result to a new .csv file
res.to_csv('atlanta_temp_sample_avg.csv',index=False)
#print (dataset.values)








