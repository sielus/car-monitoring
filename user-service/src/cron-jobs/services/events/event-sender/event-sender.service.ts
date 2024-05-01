import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import {
  topics,
  UserRemovePayloadEventDto,
  UserScopeRelationPayloadEventDto,
  UserUpsertPayloadEventDto,
} from '@sielus/events-lib';

@Injectable()
export class EventSenderService {
  constructor(@Inject('KAFKA') private kafka: ClientKafka) {}

  serviceId = process.env.SERVICE_ID;

  public emitUpsertUser(event: UserUpsertPayloadEventDto) {
    this.kafka.emit(`${this.serviceId}.${topics.upsertUserTopic}`, { event });
  }

  public emitRemoveUser(event: UserRemovePayloadEventDto) {
    this.kafka.emit(`${this.serviceId}.${topics.removeUserTopic}`, { event });
  }

  public emitCreateUserScopeRelation(event: UserScopeRelationPayloadEventDto) {
    this.kafka.emit(
      `${this.serviceId}.${topics.createUserScopeRelationTopic}`,
      {
        event,
      },
    );
  }

  public emitRemoveUserScopeRelation(event: UserScopeRelationPayloadEventDto) {
    this.kafka.emit(
      `${this.serviceId}.${topics.removeUserScopeRelationTopic}`,
      {
        event,
      },
    );
  }
}
