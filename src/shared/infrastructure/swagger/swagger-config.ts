import swaggerJsDoc from 'swagger-jsdoc';

export const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'ENCUENTRA MI BICICLETA API',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local server - Development environment',
      },
    ],
  },
  apis: ['./src/**/*.ts'],
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);
