import { Request, Response } from "express";
import { AppResError } from "../models/extensions/appResError";

class controller {
    static getAll = async (                 // admin only
        req: Request,
        res: Response
    ) => {
        try {

        } catch(err) { res.appError = err as AppResError }
    }

    static getById = async (
        req: Request,
        res: Response
    ) => {
        try {

        } catch(err) {}
    }

    static create = async (
        req: Request,
        res: Response
    ) => {
        try {

        } catch(err) {}
    }

    static update = async (
        req: Request,
        res: Response
    ) => {
        try {

        } catch(err) {}
    }

    static delete = async (
        req: Request,
        res: Response
    ) => {
        try {

        } catch(err) {}
    }
}

export default controller