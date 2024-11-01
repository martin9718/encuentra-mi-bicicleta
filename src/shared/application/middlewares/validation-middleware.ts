import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { BadRequestError } from '../errors/bad-request-error';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function validateDto(dtoClass: any, body: any) {
  const dtoInstance = plainToInstance(dtoClass, body);
  const errors = await validate(dtoInstance);

  if (errors.length > 0) {
    const formedErrors = errors.map((error) => {
      return {
        property: error.property,
        constraints: Object.values(error.constraints || {}),
      };
    });

    throw new BadRequestError(
      'Validation failed. Some fields did not pass validation.',
      formedErrors
    );
  }

  return dtoInstance;
}
