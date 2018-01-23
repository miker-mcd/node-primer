// Create a wrapper function that takes an Express instance and a database as arguments

var ObjectID = require('mongodb').ObjectID;

module.exports = function (app, myDB) {

  // CREATE an entry
  app.post('/entries', function (req, res) {

    // Test the POST request to localhost:8000/entries using Postman
    // res.send('Post working!');

    // Check request by logging the req.body to the server
    console.log(req.body); // { title: 'First Entry', body: 'This is my first entry!' }

    // Call insert on entries collection to create new entry
    const entry = { text: req.body.body, title: req.body.title };
    myDB.collection('entries').insert(entry, function (err, result) {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  })

  // READ an entry
  app.get('/entries/:id', function (req, res) {
    const id = req.params.id;

    // MongoDB requires an ID object
    const details = { '_id': new ObjectID(id) };
    myDB.collection('entries').findOne(details, function (err, item) {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(item);
      }
    });
  });

  // DELETE an entry
  app.delete('/entries/:id', function (req, res) {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    myDB.collection('entries').remove(details, function (err, item) {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send('Note ' + id + ' deleted!');
      }
    });
  });

};

















