import { Request, Response } from "express";
import { loginDTO, registerDTO, specRegisterDTO } from "../models/DTOs/createDTO";
import { AppResError } from "../models/extensions/appResError";
import teacherContext from '../DAL/DbServices/teacherService'

export const registerTeacher = async (
    req: Request<any, any, specRegisterDTO>,
    res: Response
) => {
    try {
        const body = req.body
        await teacherContext.create(body.username, body.password, body.email, body.classroom);
        res.status(201).send()
    } catch(err) { res.appError = err as AppResError }
}

export const registerStudent = async (
    req: Request<any, any, registerDTO>,
    res: Response
) => {
    try {

    } catch(err) { res.appError = err as AppResError }
}

export const login = async (
    req: Request<any, any, loginDTO>,
    res: Response
) => {
    try {

    } catch(err) { res.appError = err as AppResError }
}

export const logout = async (
    req: Request,
    res: Response
) => {
    try {

    } catch(err) { res.appError = err as AppResError }
}