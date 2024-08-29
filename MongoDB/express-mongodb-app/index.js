const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const router = require('./routes/users');

const app = express();
connectDB();

app.use(bodyParser.json());

app.use('/api/users', router);

const PORT = process.env.port || 5001;

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })