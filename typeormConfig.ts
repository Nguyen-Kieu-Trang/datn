import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

const options: DataSourceOptions = {
  type: 'mysql',
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || 'Password1@',
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  logging: process.env.DATABASE_LOGGING ? true : false,
  migrationsTableName: 'sys_migrations',
  migrations: ['libs/database/migration/*{.ts,.js}'],
  entities: ['libs/database/entities/*{.ts,.js}'],
};

export default new DataSource(options);
