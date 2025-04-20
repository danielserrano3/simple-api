import { NextFunction, Request, Response } from "express";

const validate = (shcema: any) => (req: Request, res: Response, next: NextFunction) => {
  try {
    next();
  } catch (e: any) {
    return res.status(400).send(e.errors);
  }
}

export default validate;