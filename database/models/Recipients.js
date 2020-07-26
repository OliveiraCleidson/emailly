const { recipientsSchema } = require('../schemas/'),
  mongoose = require('mongoose');

module.exports = mongoose.model('recipients', recipientsSchema);