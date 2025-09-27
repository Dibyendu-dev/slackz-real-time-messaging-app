import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { PORT } from './config/serverConfig.js';
import connectDB from './config/dbConfig.js';
import apiRouter from './routes/apiRoute.js'
import bullServerAdapter from './config/bullBoardConfig.js'

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/ui', bullServerAdapter.getRouter());

app.use('/api',apiRouter)

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