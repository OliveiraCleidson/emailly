const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
  googleId: String
}, { timestamps: true });


module.exports = usersSchema;