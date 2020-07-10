import { TAG } from 'config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EService {
  private readonly variable = `${TAG.ok}`;

  constructor() {
    this.variable;
  }
}
