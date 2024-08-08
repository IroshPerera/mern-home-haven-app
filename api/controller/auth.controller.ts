import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from 'bcrypt';
import errorHandler from "../utils/error";
import jwt from 'jsonwebtoken';

export const signup = async (req: Request, res: Response, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save()
        res.status(201).json({ message: 'User created successfully' });
    } catch (err: Error | any) {
        next(err);
    }
}

export const signin = async (req: Request, res: Response, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    try {
        const validUser: any = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found'));
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials!'));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET as string);
        const { password: pass, ...rest } = validUser._doc;
        res.
            cookie('token', token, { httpOnly: true })
            .status(200)
            .json({ rest });
    } catch (error) {
        next(error);

    }
}

export const google = async (req: Request, res: Response, next) => {
    try {
        const user: any = await User.findOne({ email: req.body.email });
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string);
            const { password: pass, ...rest } = user._doc;
            res.
                cookie('token', token, { httpOnly: true })
                .status(200)
                .json({ rest });

        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = await bcrypt.hashSync(generatedPassword, 10);
            const newUser :any = new User({ username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4), email: req.body.email, password: hashedPassword , avatar:req.body.photo});
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET as string);
            const { password: pass, ...rest } = newUser._doc;
            res.
                cookie('token', token, { httpOnly: true })
                .status(200)
                .json({ rest });

                

        }

    } catch (error) {
        next(error);
    }
}
