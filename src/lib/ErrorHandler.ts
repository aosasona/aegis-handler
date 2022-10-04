import {Config} from "../types/config";
import { ErrorHandlerVars} from "../types/error";

export class ErrorHandler {
  private configParser;
  private error;
  private response;

  public constructor({ e, response, configParser }:ErrorHandlerVars) {
	if (!configParser) throw new Error("ConfigParser is not specified");
	if (!e) return
	this.error = e;
	this.response = response;
	this.configParser = configParser;
  }

  private async checkErrorIsAllowed(error: any) {
	let config = await this?.configParser?.getConfig();
	const {allowedErrors} = config as Config;
	for (const allowedError of allowedErrors) {
	  if (error instanceof allowedError) return true;
	}
	return false;
  }
}