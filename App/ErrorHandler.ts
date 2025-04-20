import { NextFunction, Request, Response } from "express"
import CustomError from "../Error/CustomErrorApi.js"
import { STATUS_CODE } from "../Utils/StatusCode.js"


export function ErrorHandler(err: Error, req: Request, res: Response, next: NextFunction): Response | void {

  console.error(new Date().toLocaleString(), ' [ErrorHandler]: ', err);

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message, code: err.errorCode });
  }

  return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({ msg: 'Internal Server Error' });

}

