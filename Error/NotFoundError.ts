import { STATUS_CODE } from "../Utils/StatusCode.js";
import CustomError from "./CustomErrorApi.js";

export default class NotFoundError extends CustomError {

  constructor(message: string, code?: number) {
    super(message, STATUS_CODE.NOT_FOUND, code || 404);
    this.name = 'NotFoundError';
  }
}