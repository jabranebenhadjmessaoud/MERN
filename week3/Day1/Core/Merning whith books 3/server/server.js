import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/books.config.js';
import router from './routes/books.route.js';
const app = express();

const PORT = process.env.PORT;


app.use(express.json(), cors());


app.use("/api",router)


dotenv.config();






dbConnect();









app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);