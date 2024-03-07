import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class AppService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  async sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async getHello(): Promise<string> {
    this.eventEmitter.emit('hello.created', 1234);
    await this.sleep(3000);
    return 'Hello World!';
  }
}
