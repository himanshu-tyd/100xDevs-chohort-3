import jwt from 'jsonwebtoken';
import { Response } from 'express';

export const generateToken = (res: Response, userId: string) => {
    const secret = process.env.JWT_SECRET;

    if (secret == undefined || !userId) return;

    const token = jwt.sign({userId}, secret, {
        expiresIn: '30d' 
    });

    const nextMonth = new Date();
    nextMonth.setDate(nextMonth.getDate() + 30);

    res.cookie("jwtToken", token, {
        httpOnly: true,
        expires: nextMonth
    });
}
