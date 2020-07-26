const { surveysSchema } = require('../schemas/'),
  mongoose = require('mongoose');

module.exports = mongoose.model('surveys', surveysSchema);