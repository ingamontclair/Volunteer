# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

print ("hello")
print ("hello, world")

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.weatherData
cityHistoricalData_Atlanta = db.cityHistoricalData_Atlanta
# import pprint
# pprint.pprint(hello.find_one())
def read():
    try:
        atlantaCol = db.cityHistoricalData_Atlanta.find()
        print ("\n All historic data for Atlanta,GA \n")
        for date in atlantaCol:
            print (date)
    except Exception as e:
         print (str(e))

print("******************")
read()
