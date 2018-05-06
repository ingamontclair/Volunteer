#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat May  5 20:40:06 2018

@author: priyankaphapale
"""
from datetime import datetime as dt
from pymongo import MongoClient
import pandas as pd
import json
import numpy
import sys

# Database Connection
client = MongoClient('localhost', 27017)
db = client.weatherData

cityCode="KNYC" #Pass city code
monthCode =3

# new list declared to store the filtered data
filteredData = []


# Function to filter data between given two dates and with required city code
def read(monthCode, cityCode):
    try:
        cityData = db.historicalData.find()
        for cursor in cityData:  
            db_Date = cursor['date'] 
            dbDateFormat = dt.strptime(db_Date, "%m/%d/%y") 
            dbcityMonth = dbDateFormat.month
             
            if(dbcityMonth == monthCode and cursor['city_code'] == cityCode):
                newCursor = {}
                newCursor['date'] = cursor['date']
                newCursor['temp_min'] = cursor['temp_min']
                newCursor['temp_max'] = cursor['temp_max']
                newCursor['temp_mean'] = cursor['temp_mean']
                filteredData.append(newCursor)
    except Exception as e:
         print ('Exception : '+ str(e))

read(monthCode, cityCode)
#data = {}
#data['key'] = 'value'
response = {
    "status": 200
};
 
     
requiredData = []
 
response["data"]=filteredData        
json_data = json.dumps(response)
print ("jsonresult:"+json_data)
         
            