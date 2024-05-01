import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const microserviceConfig: ClientProviderOptions = {
  transport: Transport.KAFKA,
  name: 'KAFKA',
  options: {
    client: {
      brokers: ['127.0.0.1:9092'],
      clientId: process.env.SERVICE_ID,
    },
    consumer: {
      groupId: process.env.SERVICE_ID,
      allowAutoTopicCreation: true,
    },
  },
};
