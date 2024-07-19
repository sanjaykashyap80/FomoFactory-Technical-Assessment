import express from 'express';
import cors from 'cors'; 
import connectDB from './config/db';
import dataRouter from './routes/data';
import fetchData from './services/fetchData';
import cron from 'node-cron';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

connectDB();

app.use(express.json());

app.use('/api', dataRouter);

cron.schedule('*/10 * * * * *', fetchData);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});