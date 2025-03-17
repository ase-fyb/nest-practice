import { Injectable } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';

@Injectable()
export class ProducerService {

    constructor(private readonly sqsService: SqsService) {}

    public async sendMessage() {
        try {
            const message = {
                id: 'sample',
                body: 'sample message',
                groupId: 'groupId',
                deduplicationId: 'deduplicationId',
                delaySeconds: 0,
            };
    
            this.sqsService.send("producer1", message)
        } catch (error) {
            console.log("Error sending message from producer");
            console.log(error);
            console.log(error.message);
        }
    }
}
