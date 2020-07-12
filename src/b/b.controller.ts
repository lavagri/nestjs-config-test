const config = require('config');
import { Controller, Get } from '@nestjs/common';

@Controller('b')
export class BController {

  @Get()
  getEnvB() {
      return { apiKey: config.get('MAIL').apiKey, db: config.get('DB').redis.appStore.password }
  }
}
