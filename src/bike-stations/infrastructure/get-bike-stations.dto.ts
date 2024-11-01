import { Transform } from 'class-transformer';
import {
  IsIn,
  IsInt,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';

import { BikeStationStatus, bikeStationStatusValues } from '../domain/types';

export class GetBikeStationsDto {
  @IsNotEmpty()
  @IsLatitude()
  readonly latitude: number;

  @IsNotEmpty()
  @IsLongitude()
  readonly longitude: number;

  @IsNotEmpty()
  @Transform(({ value }) => parseFloat(value))
  @IsNumber()
  @Min(0)
  readonly distance: number;

  @IsOptional()
  @IsIn(bikeStationStatusValues)
  readonly status?: BikeStationStatus;

  @IsOptional()
  @Transform(({ value }) => parseFloat(value))
  @IsInt()
  readonly limit?: number;
}
