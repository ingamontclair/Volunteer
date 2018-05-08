#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue May  8 16:24:40 2018

@author: agni
"""

import warnings

warnings.simplefilter(action='ignore', category=FutureWarning)

from pymongo import MongoClient
from datetime import datetime as dt

client = MongoClient()
db = client.weatherData

d1970 = dt.strptime('1970-01-01', '%Y-%m-%d')

col = db.HistoricalWeatherData.find({'date': {'$lte': d1970}})
for doc in col:
    ed = dt.strftime(doc['date'], '2018-%m-%d')
    ud = dt.strptime(ed, '%Y-%m-%d')

    db.HistoricalWeatherData.update_one(
        {'_id': doc['_id']},
        {
            "$set": {
                "date": ud
            }
        }
    )