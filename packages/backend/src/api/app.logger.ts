import {LoggerModule as LoggerModuleNest} from 'nestjs-pino';

export const LOGGER_TRANSPORT =
  process.env.NODE_ENV !== 'test' ? {target: 'pino-pretty'} : undefined;

export const LOGGER_AUTO_LOGGING = process.env.NODE_ENV !== 'test';

export function createLoggerModule() {
  return LoggerModuleNest.forRoot({
    pinoHttp: {
      autoLogging: LOGGER_AUTO_LOGGING,
      transport: LOGGER_TRANSPORT,
    },
  });
}
