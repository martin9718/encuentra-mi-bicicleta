import { IBikeStation, IFindBikeStationOptions } from './types';

export interface BikeStationRepository {
  findStationsWithinDistance(
    options: IFindBikeStationOptions
  ): Promise<IBikeStation[]>;
}
