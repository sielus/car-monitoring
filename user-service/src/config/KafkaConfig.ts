import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const microserviceConfig: ClientProviderOptions = {
  transport: Transport.KAFKA,
  name: 'KAFKA',
  options: {
    client: {
      brokers: ['127.0.0.1:9092'],
      clientId: 'user-service',
    },
    consumer: {
      groupId: 'user-service',
      allowAutoTopicCreation: true,
    },
  },
};
