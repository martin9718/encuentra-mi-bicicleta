import { Request, Response } from 'express';

import { validateDto } from '../../shared/application/middlewares/validation-middleware';
import { GetBikeStationsUseCase } from '../application/get-bike-stations-use-case';
import { GetBikeStationsDto } from './get-bike-stations.dto';

export class GetBikeStationsController {
  constructor(
    private readonly getBikeStationsUseCase: GetBikeStationsUseCase
  ) {}

  async run(req: Request, res: Response) {
    const dto: GetBikeStationsDto = (await validateDto(
      GetBikeStationsDto,
      req.query
    )) as unknown as GetBikeStationsDto;

    const bikeStations = await this.getBikeStationsUseCase.run(dto);

    return res.status(200).json(bikeStations);
  }
}
