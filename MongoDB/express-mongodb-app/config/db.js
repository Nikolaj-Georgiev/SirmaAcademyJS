const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/express-mongodb-app');

    console.log('MongoDB connected!');
  } catch (error) {
    console.error('ERROR WHILE CONNECTING: ' + error.message);
  }

}

module.exports = connectDB;