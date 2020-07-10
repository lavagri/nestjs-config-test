import { SOCKET_IO, JWT } from 'config';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BService {

  socketEmit() {
    Logger.debug(`Just imagine, i'm gonna use simple adapter with socket io ${SOCKET_IO.redis}`)
  }

  jwtHash() {
    Logger.debug(`Hash using params ${JWT}`)
  }

}
