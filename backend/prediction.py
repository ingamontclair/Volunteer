#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Apr 26 22:14:38 2018

@author: agni
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

s = "12-25-17"
sd=s.replace("-","/")
ed="12/31/17"
cityCode="KFTY"

# Formating dates to compare which is greater or small
startDate = dt.strptime(sd, "%m/%d/%y")
endDate = dt.strptime(ed, "%m/%d/%y")

# new list declared to store the filtered data
filteredData = []

# Function to filter data between given two dates and with required city code
def read(startDate, endDate, cityCode):
    try:
        # Reading table from the database
        cityData = db.cityHistoricalData_Atlanta.find()  
        # Iteating through each row in table
        for cursor in cityData:  
            # Reading specific column 'date'
            db_Date = cursor['date'] 
            # Fromating the date to required format to compare
            dbDateCompare = dt.strptime(db_Date, "%m/%d/%y") 
        
            # Filter to get the data between two dates and wth required city code
            if(dbDateCompare > startDate and dbDateCompare < endDate and cursor['city_code'] == cityCode):
                # If the above condition is true then the data data is added to 'filteredData' list
                filteredData.append(cursor) 
        # Printing Filtered Data
        print(filteredData)
    except Exception as e:
         print (str(e))

#print("******************")
read(startDate, endDate, cityCode)
#data = {}
#data['key'] = 'value'
response = {
    "status": 200
};
 
     
requiredData = []
for column in filteredData:
    requiredData.append(column['date'])  
response["data"]=requiredData        
json_data = json.dumps(response)
print ("jsonresult:"+json_data)
         
            