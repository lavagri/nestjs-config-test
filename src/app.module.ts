import { Logger } from '@nestjs/common';

import { Module } from '@nestjs/common';
Logger.debug(` * Module import done`);

import { AppController } from './app.controller';
Logger.debug(` * AppController import done`);

import { AppService } from './app.service';
Logger.debug(` * AppService import done`);

import { BModule } from './b/b.module';
Logger.debug(` * B import done`);

import { AModule } from './a/a.module';
Logger.debug(` * A import done`);

import { CModule } from './c/c.module';
Logger.debug(` * C import done`);


@Module({
  imports: [AModule, BModule, CModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
