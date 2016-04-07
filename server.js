'use strict';

var express = require('express'),
    favicon = require('serve-favicon'),
    routes = require('./app/routes/index.js'),
    mongo = require('mongodb').MongoClient;

var app = express();

mongo.connect('mongodb://localhost:27017/timolawlurlshortener', function(err, db) {
    if (err) {
        throw new Error('Database failed to connect!');
    }
    else {
        console.log('MongoDB successfully connected on port 27017.');
    }

    app.set('port', (process.env.PORT || 5000));

    app.use('/public', express.static(process.cwd() + '/public'));
    app.use(favicon(process.cwd() + '/public/images/favicon.ico'));

    routes(app, os);

    app.listen(app.get('port'), function() {
        console.log('Node app is running on port', app.get('port'));
    });
});



