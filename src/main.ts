import { Logger } from '@nestjs/common';

Logger.log(`┌────────────────────────────────────────────────────────────┐`);
Logger.log(`│    Starting APP MODULE: ${new Date().toISOString()}        │`);
Logger.log(`└────────────────────────────────────────────────────────────┘`);

import { NestFactory } from '@nestjs/core';
Logger.debug(` * NestFactory import done`);
import { AppModule } from './app.module';
Logger.debug(` * AppModule import done`);

Logger.log(`┌────────────────────────────────────────────────────────────┐`);
Logger.log(`│    END LOAD APP MODULE: ${new Date().toISOString()}        │`);
Logger.log(`└────────────────────────────────────────────────────────────┘`);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
