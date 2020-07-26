const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: String
}, { timestamps: true });


module.exports = recipientSchema;