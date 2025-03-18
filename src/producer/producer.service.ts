import { Injectable, Logger } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';

@Injectable()
export class ProducerService {
  constructor(private readonly sqsService: SqsService) {}

  private readonly logger = new Logger(ProducerService.name, {
      timestamp: true,
  });
  

  public async sendMessage() {
    try {
      const message = {
        id: '1',
        body: 'sample message',
        delaySeconds: 0,
      };

      this.logger.log('Sending message with body: ' + message.body);
      await this.sqsService.send('producer1', message);
    } catch (error) {
      console.error('Error sending message from producer:');
      console.error(error);
    }
  }
}
