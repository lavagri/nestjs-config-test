import { TAG } from 'config';
import { RATE_LIMIT, UserRoles } from 'config';
import { Controller, Patch, Post } from '@nestjs/common';

@Controller(`f - ${TAG.ok}`)
export class FController {

  @Post('/rate')
  rate() {
    return RATE_LIMIT.points;
  }

  @Post('/role')
  roleCheck() {
    return !!UserRoles.user;
  }

  @Patch('/duration')
  durationChange() {
    return RATE_LIMIT.duration + 1;
  }
}
