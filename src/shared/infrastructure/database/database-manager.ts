import { Dialect } from 'sequelize/types/sequelize';
import { Sequelize } from 'sequelize-typescript';

import { config } from '../config';
const { dbHost, dbName, dbUser, dbPassword, dbDialect, dbPort } = config.server;

export class DatabaseManager {
  private static dbConnection: Sequelize;

  static getDbConnection(): Sequelize {
    if (!this.dbConnection) {
      this.dbConnection = new Sequelize({
        host: dbHost,
        port: parseInt(dbPort || '5432'),
        database: dbName,
        username: dbUser,
        password: dbPassword,
        dialect: dbDialect as Dialect,
        models: [],
        logging: false,
      });
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
}
