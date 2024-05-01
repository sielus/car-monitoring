import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
@Injectable()
export class EventSenderService {
  constructor(@Inject('KAFKA') private kafka: ClientKafka) {}

  serviceId = process.env.SERVICE_ID;


}
