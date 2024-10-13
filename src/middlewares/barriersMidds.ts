import { NextFunction, Request, Response } from 'express'
import { itoken } from '../models/DTOs/cookie';
import { AppResError } from '../models/extensions/appResError';

export const onlyTeacher = async (
    req:  Request,
    res:  Response,
    next: NextFunction
) => {
    try {
        const token: itoken = req.user!
        if (token.role === 'teacher' || token.role === 'admin') {
            next();
        } else throw new AppResError(403, 'you are not allowed to get here!')

    } catch(err) {
        const error = err as AppResError;
        res.status(error.status || 403).send(error.message);
    }
}

