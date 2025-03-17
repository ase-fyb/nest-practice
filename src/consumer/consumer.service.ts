import { Injectable } from '@nestjs/common';
import { SqsMessageHandler } from '@ssut/nestjs-sqs';
import { Message } from '@ssut/nestjs-sqs/dist/sqs.types';

@Injectable()
export class ConsumerService {
  @SqsMessageHandler('consumer1')
  public async consumeMessage(message: Message) {
    return 'Received message with body: ' + message.body;
  }
}
