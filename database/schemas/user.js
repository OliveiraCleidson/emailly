const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
  googleId: String
});


module.exports = usersSchema;