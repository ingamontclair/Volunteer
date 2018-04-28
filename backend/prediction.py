#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Apr 26 22:14:38 2018

@author: agni
"""

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Mar  7 17:31:09 2018

@author: agni
"""
import pandas as pd
import json
#from pandas import DataFrame, read_csv
#from pandas import read_csv
import numpy

import sys
#print('ok extra')
#print ('Number of arguments:', len(sys.argv), 'arguments.')
#print ('Argument List:', str(sys.argv))
#print('ok again')

#data = {}
#data['key'] = 'value'
response = {
    "status": 200
};
 
     
myList=[]
for i in range(10):
 myList.append(i)  
response["data"]=myList        
json_data = json.dumps(response)
print (json_data)
         
            