import {DataSource as TypeOrmDataSource} from 'typeorm';
import {PgDataSource} from '../frameworks/data-sources';
import {Module, Provider} from '@nestjs/common';
import {DataSource} from '../domain';

const useCases: Provider[] = [];

@Module({
  providers: [
    {
      provide: DataSource<TypeOrmDataSource>,
      useFactory: async () => {
        const dataSource: DataSource<TypeOrmDataSource> = new PgDataSource();
        await dataSource.initialize();
        return dataSource;
      },
    },
    ...useCases,
  ],
  exports: [...useCases],
})
export class UseCasesModule {}
