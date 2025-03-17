import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ProducerService } from './producer/producer.service';

@Controller('messages')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly producerService: ProducerService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('send')
  async produceMessage() {
    try {
      await this.producerService.sendMessage();
    } catch (error) {
      console.error('Error in controller while sending message from producer:');
      console.error(error);
    }
  }
}
