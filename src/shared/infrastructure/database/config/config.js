// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const sequelizeOptions = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_DIALECT,
};

if (process.env.NODE_ENV === 'production') {
  sequelizeOptions.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
}

module.exports = sequelizeOptions;
