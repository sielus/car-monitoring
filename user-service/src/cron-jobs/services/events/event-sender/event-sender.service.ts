import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { UserRemovePayloadEvent } from 'src/cron-jobs/services/events/dto/user-remove-payload.event';
import { UserScopeRelationPayloadEvent } from 'src/cron-jobs/services/events/dto/user-scope-relation-payload.event';
import { UserUpsertPayloadEvent } from 'src/cron-jobs/services/events/dto/user-upsert-payload.event';

@Injectable()
export class EventSenderService {
  constructor(@Inject('KAFKA') private kafka: ClientKafka) {}

  public emitUpsertUser(event: UserUpsertPayloadEvent) {
    this.kafka.emit('user-service.upsert-user', { event });
  }

  public emitRemoveUser(event: UserRemovePayloadEvent) {
    this.kafka.emit('user-service.remove-user', { event });
  }

  public emitCreateUserScopeRelation(event: UserScopeRelationPayloadEvent) {
    this.kafka.emit('user-service.create-user-scope-relation', { event });
  }

  public emitRemoveUserScopeRelation(event: UserScopeRelationPayloadEvent) {
    this.kafka.emit('user-service.remove-user-scope-relation', { event });
  }
}
