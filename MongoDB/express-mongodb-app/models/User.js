const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // doesn't validate the data
  },
  age: {
    type: Number,
    required: true
  },

});

module.exports = mongoose.model('User', UserSchema)