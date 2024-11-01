import { BaseError } from './base-error';

export class BadRequestError extends BaseError {
  status = 400;

  errorCodeName = 'BAD_REQUEST_ERROR';

  message = 'Validation failed. Some fields did not pass validation.';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(message: string, details?: any, isReportable?: boolean) {
    super(message);
    this.details = details;
    this.isReportable = isReportable || false;
    this.message = message || this.message;

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}
