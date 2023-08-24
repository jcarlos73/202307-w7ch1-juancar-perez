import chalk from "chalk";
import debugCreator from "debug";
import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../CustomError/CustomError";

const debug = debugCreator(":");

export const endpointNotFound = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const notFoundError = new CustomError("Endpoint not found", 404);
  next(notFoundError);
};

export const generalErrorHandler = (
  error: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  debug(chalk.red(error.message));

  const errorMessage = error.message ?? "Error server";
  const errorStatusCode = error.statusCode;

  res.status(errorStatusCode).json({ error: errorMessage });
};
