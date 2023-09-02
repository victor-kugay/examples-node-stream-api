import {Module} from '@nestjs/common';
import {createLoggerModule} from './app.logger';
import {FilesModule} from './files/files.module';

const modules = [FilesModule];

@Module({
  imports: [createLoggerModule(), ...modules],
})
export class AppModule {}
