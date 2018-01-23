// Create a wrapper function that takes an Express instance and a database as arguments

module.exports = function (app, db) {

  // CREATE an entry
  app.post('/entries', function (req, res) {

    // Test the POST request to localhost:8000/entries using Postman
    res.send('Post working!');

    // Check request by logging the req.body to the server
    console.log(req.body); // { title: 'First Entry', body: 'This is my first entry!' }
  })
};

















