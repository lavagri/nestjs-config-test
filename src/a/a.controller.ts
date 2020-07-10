import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AService } from './a.service';

@Controller('a')
export class AController {
  constructor(private readonly aService: AService) {}

  @Get()
  getA() {
    return 'a get';
  }

  @Post()
  postA() {
    return 'a post';
  }

  @Post('/hash')
  hash() {
    return this.aService.computeHash();
  }

  @Patch()
  patchA() {
    return 'a patch';
  }

  @Put()
  putA() {
    return 'a put';
  }

  @Delete()
  deleteA() {
    return 'a delete';
  }
}
