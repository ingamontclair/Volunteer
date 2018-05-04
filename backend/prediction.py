#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Apr 26 22:14:38 2018

@author: agni
"""
import pandas as pd
import json
#from pandas import DataFrame, read_csv
#from pandas import read_csv
import numpy
import sys

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.weatherData

#print('ok extra')
#print ('Number of arguments:', len(sys.argv), 'arguments.')
#print ('Argument List:', str(sys.argv))
s = "12-29-2017"
startDate=s.replace("-","/")
print(startDate)
endDate="12/31/2017"
cityCode="KNYCf"
#print('start date',startDate)
#print('ok again')
cityHistoricalData_NewYork = db.cityHistoricalData_NewYork
# import pprint
# pprint.pprint(hello.find_one())
def read(startDate, endDate, cityCode):
    try:
        nyCol = db.cityHistoricalData_NewYork.find({ "date": { "$gt": startDate, "$lt": endDate }})
        nyCol = db.cityHistoricalData_NewYork.find({ "city_code": cityCode})
        #print ("\n All historic data for Atlanta,GA \n")
        for date in nyCol:
            print (date)
    except Exception as e:
         print (str(e))

#print("******************")
read(startDate, endDate, cityCode)
#data = {}
#data['key'] = 'value'
response = {
    "status": 200
};
 
     
myList=[]
for i in range(30):
 myList.append(i)  
response["data"]=myList        
json_data = json.dumps(response)
print ("jsonresult:"+json_data)
         
            