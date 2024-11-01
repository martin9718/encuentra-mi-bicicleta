import { NextFunction, Request, Response } from 'express';

import { BaseError } from '../errors/base-error';

export function errorHandleMiddleware(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  console.error(`[ERROR] - ${err.message}`);

  if (err instanceof BaseError) {
    return res.status(err.status).json({
      code: err.errorCodeName,
      message: err.message,
      details: err.details,
    });
  }

  return res.status(500).json({
    code: 'UNEXPECTED_ERROR',
    message: 'An unexpected error occurred. Please try again later.',
  });
}
