import { Request, Response } from "express";
import { loginDTO, registerDTO, specRegisterDTO } from "../models/DTOs/createDTO";
import { AppResError } from "../models/extensions/appResError";
import authContext from '../DAL/DbServices/authService';
import { generateToken } from "../services/tokenService";
import bcrypt from 'bcrypt'


export const registerTeacher = async (
    req: Request<any, any, specRegisterDTO>,
    res: Response
) => {
    console.log('log: registerTeacher');
    try {
        const body = req.body
        const creation = await authContext.createTeacher(body.username, body.password, body.email, body.classroom);
        if (creation instanceof Error) throw new AppResError(401, creation.message);

        const token = generateToken({ id  : creation[1].id, name: creation[1].details.username, role: creation[1].details.role });
        res.cookie('token', token);

        res.status(201).json({ teacher: creation[1], class: creation[0] });
    } catch(err) { 
        const error = err as AppResError
        res.status(error.status || 400).send(error.message)
    }
}

export const registerStudent = async (
    req: Request<any, any, registerDTO>,
    res: Response
) => {
    try {
        const creation = await authContext.createStudent(req.body)
        if (creation instanceof Error) throw new AppResError(401, creation.message);

        const token = generateToken({ id  : creation.id, name: creation.details.username, role: creation.details.role });
        res.cookie('token', token);

        res.status(201).json({ creation })
    } catch(err) { 
        const error = err as AppResError
        res.status(error.status || 400).send(error.message)
    }
}

export const login = async (
    req: Request<any, any, loginDTO>,
    res: Response
) => {
    try {
        const one = await authContext.getOne(req.body.username)
        if (one instanceof Error) throw one;
        const salt = await bcrypt.genSalt(5)
        console.log(salt);
        const pass = req.body.password
        if (pass !== one.details.password) {
            throw new AppResError(401, 'wrong password!')
        }
        const token = generateToken({ id: one.id, name: one.details.username, role: one.details.role })
        res.cookie('token', token);
        res.send('you got the token')
    } catch(err) { 
        const error = err as AppResError
        res.status(error.status || 400).send(error.message)
    }
}

export const logout = async (
    req: Request,
    res: Response
) => {
    try {

    } catch(err) { res.appError = err as AppResError }
}