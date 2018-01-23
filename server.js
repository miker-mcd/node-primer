// Setting up the local server

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

// Initialize app as an instance of Express framework
const app = express();

const port = 8000;

app.listen(port);