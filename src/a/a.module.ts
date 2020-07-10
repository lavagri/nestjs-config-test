import { Module } from '@nestjs/common';
import { AService } from './a.service';
import { AController } from './a.controller';

import { BModule } from '../b/b.module';

@Module({
  imports: [BModule],
  providers: [AService],
  controllers: [AController]
})
export class AModule {}
