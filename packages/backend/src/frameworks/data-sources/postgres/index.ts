import {DataSource as TypeOrmDataSource} from 'typeorm';
import {dbConfigDefault} from './config';
import {DataSource} from '../../../domain';

export class PgDataSource implements DataSource<TypeOrmDataSource> {
  readonly connection: TypeOrmDataSource;

  constructor() {
    this.connection = new TypeOrmDataSource(dbConfigDefault);
  }

  async initialize(): Promise<void> {
    await this.connection.initialize();
  }

  async destroy(): Promise<void> {
    return await this.connection.destroy();
  }

  async flush(): Promise<void> {
    const targetEntities = this.connection.entityMetadatas;

    for (const entity of targetEntities) {
      const repository = this.connection.getRepository(entity.name);
      await repository.query(`TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE;`);
    }
  }
}
