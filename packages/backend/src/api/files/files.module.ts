import {Module} from '@nestjs/common';
import {UseCasesModule} from '../../usecases';
import {FilesController} from './files.controller';

@Module({
  imports: [UseCasesModule],
  controllers: [FilesController],
})
export class FilesModule {}
