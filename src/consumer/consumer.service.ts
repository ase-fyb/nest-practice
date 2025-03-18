import { Message } from '@aws-sdk/client-sqs';
import { Injectable, Logger } from '@nestjs/common';
import { SqsConsumerEventHandler, SqsMessageHandler } from '@ssut/nestjs-sqs';

@Injectable()
export class ConsumerService {
  private readonly logger = new Logger(ConsumerService.name, {
    timestamp: true,
  });

  @SqsMessageHandler('consumer1')
  public async consumeMessage(message: Message) {
    this.logger.log('Received message with body: ' + message.Body);
    
    // Message deletion is automatically handled by sqs-consumer after returning the message below
    return message;
  }

  @SqsConsumerEventHandler('consumer1', 'processing_error')
  public onProcessingError(error: Error, message: Message) {
    this.logger.log('Error while processing message:');
    this.logger.log(error);
    this.logger.log('Encountered while processing message:');
    this.logger.log(message);
  }
}
