import pg from 'pg';
import { Dialect } from 'sequelize/types/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { SequelizeOptions } from 'sequelize-typescript/dist/sequelize/sequelize/sequelize-options';

import { config } from '../config';
const { dbHost, dbName, dbUser, dbPassword, dbDialect, dbPort } = config.server;

export class DatabaseManager {
  private static dbConnection: Sequelize;

  static getDbConnection(): Sequelize {
    const { nodeEnv } = config.server;

    if (!this.dbConnection) {
      const sequelizeOptions: SequelizeOptions = {
        host: dbHost,
        port: parseInt(dbPort || '5432'),
        database: dbName,
        username: dbUser,
        password: dbPassword,
        dialect: dbDialect as Dialect,
        models: [],
        logging: false,
        dialectModule: pg,
      };

      if (nodeEnv === 'production') {
        sequelizeOptions.dialectOptions = {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        };
      }
      this.dbConnection = new Sequelize(sequelizeOptions);
    }
    return this.dbConnection;
  }

  static async startConnection() {
    try {
      const db = this.getDbConnection();

      await db.authenticate();
      console.log(`${dbName} connected successfully`);
    } catch (error) {
      console.log(error);
      console.log(`Error connecting to ${dbName} database`);
    }
  }

  static async closeConnection() {
    if (this.dbConnection) {
      await this.dbConnection.close();
    }
  }
}
