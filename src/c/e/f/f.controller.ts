// import { TAG } from 'config';
// import { RATE_LIMIT, UserRoles } from 'config';
import { Controller, Patch, Post } from '@nestjs/common';

@Controller(`f - TAG.ok`)
export class FController {

  @Post('/rate')
  rate() {
    return 'points';
  }

  @Post('/role')
  roleCheck() {
    return !!'user';
  }

  @Patch('/duration')
  durationChange() {
    return 'duration' + 1;
  }
}
