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
        url: 'https://encuentra-mi-bici-c85b66bd6929.herokuapp.com',
      },
    ],
  },
  apis: ['./src/**/*.ts'],
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);
