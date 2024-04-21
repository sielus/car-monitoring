import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const microserviceConfig: ClientProviderOptions = {
  transport: Transport.KAFKA,
  name: 'KAFKA',
  options: {
    client: {
      brokers: ['127.0.0.1:9092'],
      clientId: 'auth-service',
    },
    consumer: {
      groupId: 'auth-service',
      allowAutoTopicCreation: true,
    },
  },
};
