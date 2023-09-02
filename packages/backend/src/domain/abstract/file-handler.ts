import http from 'http';
import stream from 'stream';

export type FileHandlerInput = http.IncomingMessage;

export type FileHandlerOutput = stream.Readable;

export abstract class AbstractFileHandler {
  public abstract handle: (input: FileHandlerInput) => Promise<FileHandlerOutput>;
}
