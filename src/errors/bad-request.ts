import { StatusCodes } from "http-status-codes";
import { CustomErrorAPI } from "./custom-error";

export class BadRequest extends CustomErrorAPI {
  constructor(message: string, statusCode: number = StatusCodes.BAD_REQUEST) {
    super(message, statusCode);
  }
}
