const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/express-mongodb-app');

    console.log('MongoDB connected!');
  } catch (error) {
    console.error('ERROR WHILE CONNECTING: ' + error.message);
  }

}

module.exports = connectDB;