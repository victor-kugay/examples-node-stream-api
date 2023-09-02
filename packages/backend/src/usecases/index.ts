import {HandleFileUseCase} from './files';
import {Module, Provider} from '@nestjs/common';
import {FormidableFileHandler} from '../frameworks/files-handler';
import {AbstractFileHandler} from '../domain';

const useCases: Provider[] = [HandleFileUseCase];

const frameworks: Provider[] = [
  {
    provide: AbstractFileHandler,
    useClass: FormidableFileHandler,
  },
];

@Module({
  providers: [...useCases, ...frameworks],
  exports: [...useCases],
})
export class UseCasesModule {}
