import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from 'bcrypt';

export const signup = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save()
        res.status(201).json({ message: 'User created successfully' });
    } catch (err: Error|any) {
        res.status(500).json({ message: `${err.message}` });
    }
}