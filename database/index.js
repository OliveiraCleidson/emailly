const mongoose = require('mongoose'),
  keys = require('../config/keys');
require('./models');

module.exports = mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
