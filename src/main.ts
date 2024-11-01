import './shared/infrastructure/load-env-vars';
import 'express-async-errors';

import express, { Express, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

import { bikeStationsRouter } from './bike-stations/infrastructure/bike-stations-router';
import { errorHandleMiddleware } from './shared/application/middlewares/error-handle-middleware';
import { config } from './shared/infrastructure/config';
import { DatabaseManager } from './shared/infrastructure/database/database-manager';
import { swaggerDocs } from './shared/infrastructure/swagger/swagger-config';

export async function createApp(): Promise<Express> {
  await DatabaseManager.startConnection();

  const app = express();

  app.use(express.json());

  app.get('/api/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
  });

  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

  app.use('/api/bikeStations', bikeStationsRouter);

  app.use(errorHandleMiddleware);

  return app;
}

if (require.main === module) {
  createApp().then((app) => {
    const { port } = config.server;
    app.listen(port, () => {
      console.log(`[APP] - Starting application on port ${port}`);
    });
  });
}
