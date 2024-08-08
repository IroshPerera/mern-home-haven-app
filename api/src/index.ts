import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from '../routes/user.route';
dotenv.config();

mongoose.connect(process.env.MONGO as string).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});




const app = express();
const port = 8000;

app.get("/", (req: Request, res: Response) => {
    res.send("Application is running");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/test', (req, res) => {
    res.send('Hello World')
});

app.use('/api/user', userRouter);