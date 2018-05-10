const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const debug = require('debug')('weather');
const { execSync } = require('child_process');

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

// Get Cities historical weather data
router.get('/historicalWeatherData', (req, res) => {
    connection((db) => {
        db.collection('HistoricalWeatherData')
            .find()
            .toArray()
            .then((historicalWeatherData) => {
                response.data = historicalWeatherData;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Get HDD CDD data for Cities
router.get('/hdd_cdd', (req, res) => {
        connection((db) => {
            db.collection('HDD')
                .find()
                .toArray()
                .then((hdd_cdd) => {
                    response.data = hdd_cdd;
                    res.json(response);
                })
                .catch((err) => {
                    sendError(err, res);
                });
        });
});

// Get predicted weather and weather derivatives for respective cities
router.get('/weatherPrediction/:startDate/:endDate/:cityCode', (req, res) => {
    debug('hh');
    let stdout = execSync('python ../backend/prediction.py '+ req.params.startDate + ' ' + req.params.endDate + ' ' +req.params.cityCode).toString();
    stdout = stdout.substring(stdout.indexOf("jsonresult:") + "jsonresult:".length);
    debug('XXXX %s',stdout);
    debug('XXXX %s',req.params.startDate);
    //debug(req);
    debug('send');
    res.setHeader('Content-Type', 'application/json');
    res.send(stdout);
});

module.exports = router;
