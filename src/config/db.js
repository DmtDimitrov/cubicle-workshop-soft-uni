const mongoose = require('mongoose');

function initDb(connectionString) {
   return mongoose.connect(connectionString)
};

module.exports = initDb;
