import fs from "fs";
import {Config} from "../types/config";

export class ConfigParser {
  private config: Config;
  public constructor(config: Config) {
	this.config = config;
  }

  private getFullConfigPath() {
    return `${this.config.path}/aegis.json`;
  }

  private async checkConfigExists() {
    try {
      const directory = this.getFullConfigPath();
      await fs.promises.access(directory, fs.constants.F_OK);
      return true;
    } catch (e: unknown) {
      throw e
    }
  }

  private async read() {
    try {
      const fileName = this.getFullConfigPath();
      if(await this.checkConfigExists()) {
        return await fs.promises.readFile(fileName, "utf-8");
      }
    }
    catch (error: unknown) {
      throw error;
    }
  }

  private parse(file: string): object {
    if(!file) throw new Error("File is empty or not specified");
    return JSON.parse(file);
  }

  public async getConfig() {
    try {
      const file = await this.read();
      return this.parse(file as string);
    }
    catch (error: unknown) {
      throw error;
    }
  }
}