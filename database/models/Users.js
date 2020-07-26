const { usersSchema } = require('../schemas/'),
  mongoose = require('mongoose');

module.exports = mongoose.model('users', usersSchema);