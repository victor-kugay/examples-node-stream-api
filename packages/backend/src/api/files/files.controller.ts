import {Controller, Put, Req, Res} from '@nestjs/common';
import {HandleFileUseCase} from '../../usecases/files';
import {Request, Response} from 'express';
import {HandleFileBody, HandleFileResponse} from './dto/handle-file.dto';
import {ApiBody, ApiConsumes, ApiOkResponse} from '@nestjs/swagger';

@Controller()
export class FilesController {
  constructor(private readonly handleFileUseCase: HandleFileUseCase) {}

  @Put('/upload')
  @ApiBody({type: HandleFileBody})
  @ApiConsumes('multipart/form-data')
  @ApiOkResponse({type: HandleFileResponse})
  public async upload(@Req() request: Request, @Res() response: Response): Promise<void> {
    await this.handleFileUseCase.execute(request);
    response.send({status: 'ok'});
  }
}
