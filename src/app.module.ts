import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventHandler } from './event-handler';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: false,
      delimiter: '.',
      newListener: true, 
      removeListener: false,
      verboseMemoryLeak: false,
      ignoreErrors: false
    }),
  ],
  controllers: [AppController],
  providers: [AppService, EventHandler],
})
export class AppModule {}
