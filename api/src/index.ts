import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from '../routes/user.route';
import authRouter from '../routes/auth.route';
import cookieParser from 'cookie-parser';
import listingRouter from '../routes/listing.route';
dotenv.config();

mongoose.connect(process.env.MONGO as string).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});




const app = express();
app.use(express.json());
app.use(cookieParser());

const port = 3000;

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
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use((err,req,res,next) => {
   const statusCode = err.statusCode || 500;
   const message = err.message || 'Internal Server Error';
   return res.status(statusCode).json({
    success: false,
    statusCode,
    message});
})