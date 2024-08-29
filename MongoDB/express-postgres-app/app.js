import express from 'express';
import bodyParser from 'body-parser';
import { connectDB, syncDatabase } from './config/db.js';
import router from './routes/users.js';

const app = express();
connectDB();
syncDatabase();


app.use(bodyParser.json());

app.use('/api/users', router);

const PORT = process.env.port || 5001;

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })