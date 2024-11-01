import express from 'express';

import { getBikeStationsController } from './dependencies';

const bikeStationsRouter = express.Router();

bikeStationsRouter.get(
  '/',
  getBikeStationsController.run.bind(getBikeStationsController)
);

export { bikeStationsRouter };
