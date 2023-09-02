import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty} from 'class-validator';

export class HandleFileResponse {
  @ApiProperty({example: 'ok'})
  status!: 'ok';
}

export class HandleFileBody {
  @ApiProperty({type: 'string', format: 'binary'})
  @IsNotEmpty()
  file: unknown;
}
