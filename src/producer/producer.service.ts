import { Injectable } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';

@Injectable()
export class ProducerService {
  constructor(private readonly sqsService: SqsService) {}

  public async sendMessage() {
    try {
      const message = {
        id: '1',
        body: 'sample message',
        delaySeconds: 0,
      };

      await this.sqsService.send('producer1', message);
    } catch (error) {
      console.error('Error sending message from producer:');
      console.error(error);
    }
  }
}
