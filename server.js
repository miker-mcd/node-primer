// Setting up the local server

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

// Initialize app as an instance of Express framework
const app = express();

const port = 8000;

// Use body-parser to process URL encoded forms
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, {});

app.listen(port);















