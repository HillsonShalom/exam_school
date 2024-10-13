import { Request, Response } from "express";
import { iscore } from "../models/schemas/scoreSchema";

export const getAllstudents = async (            // teachers only
    req: Request,
    res: Response
) => {
    try {

    } catch(err) {}
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