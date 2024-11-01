import '../../../src/shared/infrastructure/load-env-vars';

import { Express } from 'express';
import sinon from 'sinon';
import request from 'supertest';

import { IBikeStation } from '../../../src/bike-stations/domain/types';
import { getBikeStationsUseCase } from '../../../src/bike-stations/infrastructure/dependencies';
import { createApp } from '../../../src/main';
import { DatabaseManager } from '../../../src/shared/infrastructure/database/database-manager';

let app: Express;

describe('GET /api/bikeStations - Integration Test', () => {
  beforeAll(async () => {
    app = await createApp();
  });

  afterAll(async () => {
    await DatabaseManager.closeConnection();
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should return nearby bike stations with status 200', async () => {
    const response = await request(app).get('/api/bikeStations').query({
      latitude: 20.63894174125182,
      longitude: -103.40999585636116,
      distance: 2,
    });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toHaveLength(2);

    response.body.forEach((station: IBikeStation) => {
      expect(station).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          latitude: expect.any(Number),
          longitude: expect.any(Number),
          status: expect.any(String),
          distance: expect.any(Number),
        })
      );
    });
  });

  it('should return an empty array if there are no nearby bike stations', async () => {
    const response = await request(app).get('/api/bikeStations').query({
      latitude: 21.503088783600045,
      longitude: -104.90354452261748,
      distance: 10,
    });

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toHaveLength(0);
  });

  it('should return 400 if required parameters are missing', async () => {
    const response = await request(app).get('/api/bikeStations');

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      code: 'BAD_REQUEST_ERROR',
      message: 'Validation failed. Some fields did not pass validation.',
      details: expect.arrayContaining([
        expect.objectContaining({
          property: 'latitude',
          constraints: expect.any(Array),
        }),
        expect.objectContaining({
          property: 'longitude',
          constraints: expect.any(Array),
        }),
        expect.objectContaining({
          property: 'distance',
          constraints: expect.any(Array),
        }),
      ]),
    });
  });

  it('should return 500 if there is an internal server error', async () => {
    sinon
      .stub(getBikeStationsUseCase, 'run')
      .throws(new Error('Internal Server Error'));

    const response = await request(app)
      .get('/api/bikeStations')
      .query({ latitude: 20.6767, longitude: -103.3478, distance: 5 });

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      code: 'UNEXPECTED_ERROR',
      message: 'An unexpected error occurred. Please try again later.',
    });
  });
});
