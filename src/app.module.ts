import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SqsModule } from '@ssut/nestjs-sqs';

@Module({
  imports: [
    SqsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
