import { Request, Response } from "express";
import { iscore } from "../models/schemas/scoreSchema";
import classContext from '../DAL/DbServices/classService';
import { AppResError } from "../models/extensions/appResError";

export const getAllstudents = async (            // teachers only
    req: Request,
    res: Response
) => {
    try {
        const list = await classContext.getAllStudents(req.user!)
        res.json(list)
    } 
    catch(err) {
        const error = err as AppResError
        res.status(error.status || 400).send(error.message)
    }
}

export const addScore = async (            // teachers only
    req: Request<any, any, iscore>,
    res: Response
) => {
    try {

    } catch(err) {}
}

export const changeScore = async (            // teachers only
    req: Request<any, any, iscore>,
    res: Response
) => {
    try {

    } catch(err) {}
}

export const getAverage = async (            // teachers only
    req: Request,
    res: Response
) => {
    try {

    } catch(err) {}
}