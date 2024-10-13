import { Request, Response } from "express";
import { loginDTO, registerDTO, specRegisterDTO } from "../models/DTOs/createDTO";

export const registerTeacher = async (
    req: Request<any, any, specRegisterDTO>,
    res: Response
) => {
    try {

    } catch(err) {}
}

export const registerStudent = async (
    req: Request<any, any, registerDTO>,
    res: Response
) => {
    try {

    } catch(err) {}
}

export const login = async (
    req: Request<any, any, loginDTO>,
    res: Response
) => {
    try {

    } catch(err) {}
}

export const logout = async (
    req: Request,
    res: Response
) => {
    try {

    } catch(err) {}
}