export interface LogOptions {
  error?: boolean;
  requests?: boolean;
  responses?: boolean;
  path?: boolean;
}

export interface Config {
  name: string;
  path: string;
  logOptions?: LogOptions;
  allowedErrors: any[];
}