// Export the wrapper function from routes/entry_routes.js

const entryRoutes = require('./entry_routes');

module.exports = function (app, db) {
  entryRoutes(app, db);
}
























