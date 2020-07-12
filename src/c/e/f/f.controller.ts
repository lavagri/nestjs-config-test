const config = require('config');
import { Controller, Patch, Post } from '@nestjs/common';

@Controller(`f - ${config.get('TAG').ok}`)
export class FController {

  @Post('/rate')
  rate() {
    return config.get('RATE_LIMIT').points;
  }

  @Post('/role')
  roleCheck() {
    return !!config.get('UserRoles').user;
  }

  @Patch('/duration')
  durationChange() {
    return config.get('RATE_LIMIT').duration + 1;
  }
}
