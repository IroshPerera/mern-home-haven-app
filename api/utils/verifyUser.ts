import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import errorHandler from './error';
export const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return next(errorHandler(401, 'Unauthorized'));

    jwt.verify(token, process.env.SECRET as string, (err, user) => {
        if (err) return next(errorHandler(403, 'Forbidden'));
        req.user = user;
        next();
    });


}