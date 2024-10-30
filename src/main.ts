import './shared/infrastructure/load-env-vars';

import express, { Request, Response } from 'express';

import { config } from './shared/infrastructure/config';

function bootstrap() {
  const app = express();

  app.use(express.json());

  const { port } = config.server;

  app.get('/api/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
  });

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
}

bootstrap();
