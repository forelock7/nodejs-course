var express = require('express');
var app = express();
var { MongoClient } = require('mongodb');

var config = require('./config');
var setupController = require('./controllers/setupController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

const client = new MongoClient(config.getDbConnectionString());

client.connect();

setupController(app, client);

app.listen(port);
