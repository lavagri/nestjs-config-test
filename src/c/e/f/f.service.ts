import { TAG } from 'config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FService {
  private readonly variable = `${TAG.ok}`;

  constructor() {
    this.variable;
  }
}
