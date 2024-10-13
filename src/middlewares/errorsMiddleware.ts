import { Request, Response, NextFunction } from "express";
// import AppRes from "../models/appResponse";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).json({ message: "Error Eccured", error:err.message || err });
};

export const responseErrorHandler = (
  req : Request,
  res: Response,
  next: NextFunction
) => {
  next();

  try {
    if (res.appError) {
      res.status(res.appError.status).json(res.appError.message)
    }
  } 
  catch(err) {
    const error = err as Error
    res.status(400).json(error.message)
  } 
}