import {ConfigParser} from "../lib/ConfigParser";

export interface ErrorHandlerVars {
  e: CustomError;
  response: any;
  configParser: ConfigParser;
}

export interface CustomErrorVars {
    message: string;
    code: number;
}

export class CustomError extends Error {
  public readonly code: number;
  public readonly message: string;
  public constructor({ message, code }: CustomErrorVars) {
    super(message);
    this.code = code;
    this.message = message;
  }
}