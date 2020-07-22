const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
}, { timestamps: true });


module.exports = usersSchema;