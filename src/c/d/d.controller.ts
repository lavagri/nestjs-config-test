const config = require('config');
import { Controller, Logger, Post } from '@nestjs/common';
import { DService } from './d.service';

@Controller('d')
export class DController {
  constructor(private readonly dService: DService) {}


  @Post('/socket')
  socket() {
    Logger.debug(`We use redis adapter from ${config.get('SOCKET_IO').redis.url}`)
    return this.dService.emitNewValue();
  }

}
