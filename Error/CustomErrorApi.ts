export default class CustomError extends Error {
 
  public readonly statusCode: number
  public readonly errorCode: number;

  constructor(message: string, statusCode: number, errorCode: number) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }

}
