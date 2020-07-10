import { QUEUES } from 'config';
import { Logger, Module } from '@nestjs/common';
import { BService } from './b.service';
import { BController } from './b.controller';

const log = () => Logger.log(`User queue env ${QUEUES.app_queue}`);
@Module({
  providers: [BService],
  controllers: [BController],
  exports: [BService],
})
export class BModule {}
