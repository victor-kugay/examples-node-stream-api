import {Module} from '@nestjs/common';

import {createLoggerModule} from './app.logger';

@Module({
  imports: [createLoggerModule()],
})
export class AppModule {}
