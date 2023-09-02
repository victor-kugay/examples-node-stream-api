import {SnakeNamingStrategy} from 'typeorm-naming-strategies';
import {DataSourceOptions} from 'typeorm';
import {join} from 'path';

import {entities} from './entities';

export const dbConfigDefault: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: entities,
  migrations: [join(__dirname, '../../../../migrations/**/*.{ts,js}')],
  extra: {max: process.env.POSTGRES_POOL_SIZE},
  namingStrategy: new SnakeNamingStrategy(),
};
