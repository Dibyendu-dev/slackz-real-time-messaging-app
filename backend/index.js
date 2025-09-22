import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { PORT } from './config/serverConfig.js';
import connectDB from './config/dbConfig.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB()
});

// ddas4548_db_user
// 97wl2RKDZW4ElD4M
// mongodb+srv://ddas4548_db_user:97wl2RKDZW4ElD4M@cluster0.82wqjsf.mongodb.net/