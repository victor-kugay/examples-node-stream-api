import http from 'http';
import {UseCase} from '../types';
import {Injectable} from '@nestjs/common';
import {AbstractFileHandler} from '../../domain/abstract/file-handler';
import {delay} from '../../utils';

export type HandleFileUseCaseRequest = http.IncomingMessage;

export type HandleFileUseCaseResponse = any;

@Injectable()
export class HandleFileUseCase
  implements UseCase<HandleFileUseCaseRequest, HandleFileUseCaseResponse>
{
  constructor(private readonly fileHandler: AbstractFileHandler) {}

  public execute = async (input: HandleFileUseCaseRequest) => {
    const fileStream = await this.fileHandler.handle(input);

    for await (const _ of fileStream) {
      fileStream.pause();
      await delay(200);
      fileStream.resume();
    }
  };
}
