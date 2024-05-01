import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import {
  topics,
  UserRemovePayloadEvent,
  UserScopeRelationPayloadEvent,
  UserUpsertPayloadEvent,
} from '@sielus/events-lib';

@Injectable()
export class EventSenderService {
  constructor(@Inject('KAFKA') private kafka: ClientKafka) {}

  serviceId = process.env.SERVICE_ID;

  public emitUpsertUser(event: UserUpsertPayloadEvent) {
    this.kafka.emit(`${this.serviceId}.${topics.upsertUserTopic}`, { event });
  }

  public emitRemoveUser(event: UserRemovePayloadEvent) {
    this.kafka.emit(`${this.serviceId}.${topics.removeUserTopic}`, { event });
  }

  public emitCreateUserScopeRelation(event: UserScopeRelationPayloadEvent) {
    this.kafka.emit(
      `${this.serviceId}.${topics.createUserScopeRelationTopic}`,
      {
        event,
      },
    );
  }

  public emitRemoveUserScopeRelation(event: UserScopeRelationPayloadEvent) {
    this.kafka.emit(
      `${this.serviceId}.${topics.removeUserScopeRelationTopic}`,
      {
        event,
      },
    );
  }
}
