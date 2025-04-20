import { STATUS_CODE } from "../Utils/StatusCode.js";
import CustomError from "./CustomErrorApi.js";

export default class InternalServerError extends CustomError {

  constructor(message: string, code?: number) {
    super(message, STATUS_CODE.INTERNAL_SERVER_ERROR, code || 500);
    this.name = 'InternalServerError';
  }
  
}
