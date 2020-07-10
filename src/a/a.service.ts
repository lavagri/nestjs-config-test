import { Injectable } from '@nestjs/common';
import { BService } from '../b/b.service';

@Injectable()
export class AService {
  constructor(private readonly bService: BService) {
  }

  computeHash() {
    return this.bService.jwtHash();
  }
}
