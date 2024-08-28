const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const userRouts = require('./routes/users');

const app = express();
connectDB();

app.use(bodyParser.json());

app.use('/api/users', userRouts)