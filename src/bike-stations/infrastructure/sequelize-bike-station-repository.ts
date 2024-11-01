import { DatabaseManager } from '../../shared/infrastructure/database/database-manager';
import { BikeStationRepository } from '../domain/bike-station-repository';
import {
  BikeStationStatus,
  IBikeStation,
  IFindBikeStationOptions,
} from '../domain/types';

export class SequelizeBikeStationRepository implements BikeStationRepository {
  private readonly dbConnection = DatabaseManager.getDbConnection();
  async findStationsWithinDistance(
    options: IFindBikeStationOptions
  ): Promise<IBikeStation[]> {
    const {
      latitude,
      longitude,
      distance,
      status = BikeStationStatus.IN_SERVICE,
      limit = 10,
    } = options;

    const [result] = await this.dbConnection.query(`
     WITH distances AS (
        SELECT 
            id, 
            name, 
            latitude, 
            longitude, 
            status,
            (6371 * acos(
                cos(radians(${latitude})) * cos(radians(latitude)) *
                cos(radians(longitude) - radians(${longitude})) +
                sin(radians(${latitude})) * sin(radians(latitude))
            )) AS distance
        FROM 
            bike_stations
        WHERE 
            status = '${status}'
    )
    SELECT 
        id, 
        name, 
        latitude, 
        longitude, 
        status, 
        distance
    FROM 
        distances
    WHERE 
        distance < ${distance}
    ORDER BY 
        distance ASC
    LIMIT
        ${limit};
    `);

    return result as IBikeStation[];
  }
}
