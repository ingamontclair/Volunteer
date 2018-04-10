const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/weatherData', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get Atlanta historical weather
router.get('/cityHistoricalData_Atlanta', (req, res) => {
    connection((db) => {
        db.collection('cityHistoricalData_Atlanta')
            .find()
            .toArray()
            .then((cityHistoricalData_Atlanta) => {
                response.data = cityHistoricalData_Atlanta;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Get HDD Jan for DEC'18 prices historical weather
router.get('/hdd_janz18', (req, res) => {
    connection((db) => {
        db.collection('hdd_janz18')
            .find()
            .toArray()
            .then((hdd_janz18) => {
                response.data = hdd_janz18;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Get NY temperature for Jan'18
router.get('/new_york_temp_0118', (req, res) => {
    connection((db) => {
        db.collection('new_york_temp_0118')
            .find()
            .toArray()
            .then((new_york_temp_0118) => {
                response.data = new_york_temp_0118;
    var hddSumToDateJan = 0;
    for (let entry of response.data) {
        //console.log(entry);
        hddSumToDateJan += entry['hdd'];
        entry['hdd'] = hddSumToDateJan;
        console.log(entry);
    }
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Get HDD/CDD historical average
router.get('/hdd_cdd_avg', (req, res) => {
    connection((db) => {
        db.collection('hdd_cdd_avg')
            .find()
            .toArray()
            .then((hdd_cdd_avg) => {
                response.data = hdd_cdd_avg;
//
var hddSumToDate = 0;
for (let entry of response.data) {
    //console.log(entry);
    hddSumToDate += entry['hdd'];
    entry['hdd'] = hddSumToDate;
    //console.log(entry);
}
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

//Get naive estimate
router.get('/naive_est_jan18', (req, res) => {

    connection((db) => {
    var naive_est_jan18 =[];
        db.collection('new_york_temp_0118')
            .find()
            .toArray()
            .then((new_york_temp_0118) => {
                db.collection('hdd_cdd_avg')
                    .find()
                    .toArray()
                    .then((hdd_cdd_avg) => {
                    //console.log('*--------------*');
                    //need running total variable to keep first part from current hdd for the estimate
                        var runningTotal = 0;

                        for (const [i, ny_entry] of new_york_temp_0118.entries()) {
                            //console.log('%d: %s', i, ny_entry['hdd']);
                            runningTotal += ny_entry['hdd'];
                            var bufTotal = 0; //need buffer to keep the rest of HDDs from historical averages
                            // sum historical hdd from the next day till the end of month
                            for (var j = 1 + i; j < (hdd_cdd_avg.length); j++){
                                bufTotal += hdd_cdd_avg[j]['hdd'];
                            }
                            var nav = {};
                            nav ['Date'] = ny_entry['Date'];
                            nav ['hdd'] = runningTotal+bufTotal;
                            naive_est_jan18.push(nav);

                        }
                        response.data = naive_est_jan18;
                        res.json(response);
                        })
                        .catch((err) => {
                            sendError(err, res);
                        });

           })
            .catch((err) => {
                sendError(err, res);
            });
    });

});

module.exports = router;