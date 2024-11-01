import { BikeStationRepository } from '../domain/bike-station-repository';
import { IBikeStation, IFindBikeStationOptions } from '../domain/types';

export class GetBikeStationsUseCase {
  constructor(private readonly bikeStationRepository: BikeStationRepository) {}

  async run(options: IFindBikeStationOptions): Promise<IBikeStation[]> {
    return await this.bikeStationRepository.findStationsWithinDistance(options);
  }
}
