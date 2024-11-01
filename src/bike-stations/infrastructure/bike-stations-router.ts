import express from 'express';

import { getBikeStationsController } from './dependencies';

const bikeStationsRouter = express.Router();

/**
 * @swagger
 * /api/bikeStations:
 *   get:
 *     summary: Get nearby bike stations
 *     description: Retrieve a list of nearby bike stations based on the provided location and optional filters.
 *     parameters:
 *       - in: query
 *         name: latitude
 *         required: true
 *         description: Latitude of the location to find nearby stations
 *         schema:
 *           type: number
 *           example: 20.6736
 *       - in: query
 *         name: longitude
 *         required: true
 *         description: Longitude of the location to find nearby stations
 *         schema:
 *           type: number
 *           example: -103.344
 *       - in: query
 *         name: distance
 *         required: true
 *         description: Maximum distance (in kilometers) to find bike stations within the specified location
 *         schema:
 *           type: number
 *           example: 5
 *       - in: query
 *         name: status
 *         required: false
 *         description: Filter stations by status
 *         schema:
 *           type: string
 *           enum: ['IN_SERVICE', 'NOT_IN_SERVICE']
 *           example: 'IN_SERVICE'
 *           default: 'IN_SERVICE'
 *       - in: query
 *         name: limit
 *         required: false
 *         description: Limit the number of stations returned
 *         schema:
 *           type: integer
 *           example: 10
 *           default: 10
 *     responses:
 *       200:
 *         description: A list of nearby bike stations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/BikeStation'
 *       400:
 *         description: Invalid request parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/BadRequestError'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnexpectedError'
 */
bikeStationsRouter.get(
  '/',
  getBikeStationsController.run.bind(getBikeStationsController)
);

export { bikeStationsRouter };
