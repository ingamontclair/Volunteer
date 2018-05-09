import warnings

warnings.simplefilter(action='ignore', category=FutureWarning)

from pymongo import MongoClient
from datetime import datetime as dt

client = MongoClient()
db = client.weatherData

col = db.HDD.find()
for doc in col:
    ud = dt.strptime(doc['Business Date'], '%m/%d/%Y')

    db.HDD.update_one(
        {'_id': doc['_id']},
        {
            "$set": {
                "date": ud
            }
        }
    )