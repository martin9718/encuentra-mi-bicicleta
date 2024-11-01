export interface IBikeStation {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  status: BikeStationStatus;
  distance: number;
}

export interface IFindBikeStationOptions {
  latitude: number;
  longitude: number;
  distance: number;
  status?: BikeStationStatus;
  limit?: number;
}

export enum BikeStationStatus {
  IN_SERVICE = 'IN_SERVICE',
  NOT_IN_SERVICE = 'NOT_IN_SERVICE',
}

export const bikeStationStatusValues = Object.values(BikeStationStatus);
