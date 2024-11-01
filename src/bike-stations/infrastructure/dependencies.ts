import { GetBikeStationsUseCase } from '../application/get-bike-stations-use-case';
import { GetBikeStationsController } from './get-bike-stations-controller';
import { SequelizeBikeStationRepository } from './sequelize-bike-station-repository';

const sequelizeBikeStationRepository = new SequelizeBikeStationRepository();
export const getBikeStationsUseCase = new GetBikeStationsUseCase(
  sequelizeBikeStationRepository
);

export const getBikeStationsController = new GetBikeStationsController(
  getBikeStationsUseCase
);
