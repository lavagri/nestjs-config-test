const config = require('config');
import { Controller } from '@nestjs/common';

@Controller(`e - ${config.get('TAG').ok}`)
export class EController {}
