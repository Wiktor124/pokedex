const { MONGO_URI } = require('../config');
const mongoose = require('mongoose');

function connetToMongoDB() {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('connected', () => console.log('Connected to Mongo!'));
}

module.exports = connetToMongoDB;
