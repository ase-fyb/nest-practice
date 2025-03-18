import { Injectable } from '@nestjs/common';
import { SqsMessageHandler } from '@ssut/nestjs-sqs';
import { Message } from '@ssut/nestjs-sqs/dist/sqs.types';

@Injectable()
export class ConsumerService {
  @SqsMessageHandler('consumer1')
  public async consumeMessage(message: Message) {
    // Message deletion is automatically handled by sqs-consumer after returning the message below
    return 'Received message with body: ' + (await message.body);
  }
}
