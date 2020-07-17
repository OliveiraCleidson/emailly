const mongoose = require('mongoose');
const { usersSchema } = require('../schemas/');
const Users = mongoose.model('users', usersSchema);

module.exports = Users;