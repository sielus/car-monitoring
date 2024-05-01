import { ClientProviderOptions, Transport } from '@nestjs/microservices';
import { services } from '@sielus/events-lib';

export const microserviceConfig: ClientProviderOptions = {
  transport: Transport.KAFKA,
  name: 'KAFKA',
  options: {
    client: {
      brokers: ['127.0.0.1:9092'],
      clientId: services.authService,
    },
    consumer: {
      groupId: services.authService,
      allowAutoTopicCreation: true,
    },
  },
};
