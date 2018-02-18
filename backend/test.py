# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

print ("hello")
print ("hello, world")

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.test
hello = db.hello
import pprint
pprint.pprint(hello.find_one())
