import {PassThrough} from 'stream';
import formidable from 'formidable';

import {AbstractFileHandler} from '../../domain/abstract/file-handler';
import {Injectable} from '@nestjs/common';

@Injectable()
export class FormidableFileHandler implements AbstractFileHandler {
  public handle: AbstractFileHandler['handle'] = (input) => {
    return new Promise((resolve, reject) => {
      const passThrough = new PassThrough();

      const fileWriteStreamHandler = () => passThrough;
      const form = formidable({fileWriteStreamHandler});

      form.on('file', () => resolve(passThrough));
      form.on('error', (error) => reject(error));
      form.parse(input);
    });
  };
}
