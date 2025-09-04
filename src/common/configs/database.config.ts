import { config } from 'dotenv';
import {
  booleanStringToBoolean,
  TBooleanString,
} from '../utils/boolean-string-to-boolean';
import { DatabaseConfig } from '../database/interfaces/database.config.interface';

config();

const getDatabaseConfig = (): DatabaseConfig => {
  const props = [
    'TYPEORM_HOST',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DB',
    'POSTGRES_PORT',
    'TYPEORM_LOGGING',
  ];

  for (const prop of props) {
    if (!process.env[prop]) {
      throw new Error(`[DbConfig]: variable ${prop} is not configured`);
    }
  }

  return {
    host: process.env.TYPEORM_HOST as string,
    userName: process.env.POSTGRES_USER as string,
    password: process.env.POSTGRES_PASSWORD as string,
    dbName: process.env.POSTGRES_DB as string,
    port: Number(process.env.POSTGRES_PORT),
    isActiveLogger: booleanStringToBoolean(
      process.env.TYPEORM_LOGGING as TBooleanString,
    ),
    ssl: booleanStringToBoolean(process.env.TYPEORM_SSL as TBooleanString),
  };
};

export const databaseConfig: DatabaseConfig = getDatabaseConfig();
