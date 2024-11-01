export const config = {
  server: {
    port: process.env.PORT || 3000,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbDialect: process.env.DB_DIALECT,
    dbPort: process.env.DB_PORT,
    nodeEnv: process.env.NODE_ENV || 'development',
  },
};
