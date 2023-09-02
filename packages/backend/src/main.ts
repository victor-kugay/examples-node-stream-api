import dotenv from 'dotenv';

dotenv.config();

import {INestApplication, ValidationPipe} from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {Logger as LoggerPino} from 'nestjs-pino';
import {version, name} from '../package.json';
import {AppModule} from './api/app.module';
import {NestFactory} from '@nestjs/core';
import path from 'path';

class Bootstrapper {
  private static nestApplication: INestApplication;

  public static async init() {
    try {
      await Bootstrapper.createNestApplication();
      Bootstrapper.initStatic();
      Bootstrapper.initValidation();
      Bootstrapper.initLogger();
      Bootstrapper.initSwagger();
      await Bootstrapper.listen();
      Bootstrapper.handleStart();
    } catch (error) {
      Bootstrapper.handleFail(error);
    }
  }

  private static async createNestApplication(): Promise<void> {
    if (!Bootstrapper.nestApplication) {
      Bootstrapper.nestApplication = await NestFactory.create(AppModule, {
        bufferLogs: true,
        abortOnError: false,
        cors: true,
      });
    }
  }

  private static async listen(): Promise<void> {
    await Bootstrapper.nestApplication.listen(3000);
  }

  private static initStatic(): void {
    Bootstrapper.nestApplication.setGlobalPrefix('/');
  }

  private static initLogger(): void {
    const logger = Bootstrapper.nestApplication.get(LoggerPino);
    Bootstrapper.nestApplication.useLogger(logger);
  }

  private static initValidation(): void {
    Bootstrapper.nestApplication.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    );
  }

  private static initSwagger() {
    const swaggerDocOptions = new DocumentBuilder()
      .setVersion(version)
      .setTitle(name)
      .build();

    const swaggerDoc = SwaggerModule.createDocument(
      Bootstrapper.nestApplication,
      swaggerDocOptions,
    );

    const swaggerPath = path.join('/', '/docs');
    SwaggerModule.setup(swaggerPath, Bootstrapper.nestApplication, swaggerDoc, {
      customSiteTitle: `Swagger — ${name}`,
      swaggerOptions: {
        defaultModelsExpandDepth: -1,
        persistAuthorization: true,
        syntaxHighlight: {theme: 'nord'},
      },
    });
  }

  private static handleStart(): void {
    const logger = Bootstrapper.nestApplication.get(LoggerPino);
    logger.log(`Application is running on: 3000`);
  }

  private static handleFail(error: unknown): void {
    const logger = Bootstrapper.nestApplication.get(LoggerPino);
    logger.error(error);
  }
}

Bootstrapper.init();
