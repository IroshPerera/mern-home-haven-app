import { Request, Response } from "express"
import errorHandler from "../utils/error";
import bcrypt from 'bcrypt';
import User from "../models/user.model";

export const test = (req: Request, res: Response) => {
    res.send('api route is working')
}

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) return next(errorHandler(401, 'You can only update your own account'));
    try {
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
        }
        const user: any = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
            }
        }, { new: true });

        const {password, ...rest} = user._doc;
        res.status(200).json({rest});


    } catch (error) {

        next(error)
    }
}