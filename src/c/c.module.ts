import { Module } from '@nestjs/common';

import { BModule } from '../b/b.module';

import { CService } from './c.service';
import { CController } from './c.controller';

// import { DController } from './d/d.controller';
import { EController } from './e/e.controller';
import { FController } from './e/f/f.controller';

// import { DService } from './d/d.service';
import { EService } from './e/e.service';
import { FService } from './e/f/f.service';

const CONTROLLERS = [
  CController,
  // DController,
  EController,
  FController,
];

const SERVICES = [
  CService,
  // DService,
  EService,
  FService,
];

@Module({
  imports: [BModule],
  providers: [...SERVICES],
  controllers: [...CONTROLLERS],
  exports: [...SERVICES]
})
export class CModule {}
