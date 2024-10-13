import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { itoken } from '../models/DTOs/cookie';

const verifyUser = async (
    req:  Request,
    res:  Response,
    next: NextFunction
) => {
    try {
        if (req.cookies.token) {
            const secret = process.env.SECRET_KEY;
            req.user = jwt.verify(req.cookies.token, secret!) as itoken; 
        }
    } catch(err) {
        const error = err as Error;
        res.status(401).send(error.message);
    }
}

export default verifyUser