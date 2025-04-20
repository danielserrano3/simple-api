import { STATUS_CODE } from "../../Utils/StatusCode.js";
import CustomError from "./CustomErrorApi.js";

export default class BadRequestError extends CustomError {
  
  constructor(message: string, code?: number) {
    super(message, STATUS_CODE.BAD_REQUEST, code || 400);
    this.name = 'BadRequestError';
  }
}
