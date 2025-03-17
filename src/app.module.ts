import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SqsModule } from '@ssut/nestjs-sqs';
import { ProducerService } from './producer/producer.service';
import { ConsumerService } from './consumer/consumer.service';
import { SQSClient } from '@aws-sdk/client-sqs';

require('dotenv').config();

const sqsClient = new SQSClient({
  region: process.env.AWS_DEFAULT_REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

@Module({
  imports: [
    SqsModule.register({
      consumers: [
        {
          name: 'consumer1',
          queueUrl: process.env.SQS_QUEUE_URL as string,
          sqs: sqsClient,
        },
      ],
      producers: [
        {
          name: 'producer1',
          queueUrl: process.env.SQS_QUEUE_URL as string,
          sqs: sqsClient,
        },
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ProducerService, ConsumerService],
})
export class AppModule {}
