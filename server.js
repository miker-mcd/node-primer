// Setting up the local server

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

// Initialize app as an instance of Express framework
const app = express();

const port = 8000;

// Use body-parser to process URL encoded forms
app.use(bodyParser.urlencoded({ extended: true }));

// Connect the database
MongoClient.connect(db.url, function (err, database) {
  if (err) return console.log(err);
  const myDB = database.db('myblog');
  require('./app/routes')(app, myDB);
})

app.listen(port);















