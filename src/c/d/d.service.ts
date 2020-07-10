import { Injectable } from '@nestjs/common';
import { BService } from '../../b/b.service';

@Injectable()
export class DService {
  constructor(private readonly bService: BService) {
  }

  emitNewValue() {
    return this.bService.socketEmit();
  }
}
