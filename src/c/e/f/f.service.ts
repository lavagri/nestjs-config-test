const config = require('config');
import { Injectable } from '@nestjs/common';

@Injectable()
export class FService {
  private readonly variable = `${config.get('TAG').ok}`;

  constructor() {
    this.variable;
  }
}
