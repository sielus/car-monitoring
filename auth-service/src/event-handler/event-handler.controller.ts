import { Controller, Inject } from '@nestjs/common';
import { ClientKafka, EventPattern, Payload } from '@nestjs/microservices';
import {
  UserRemovePayloadEvent,
  UserScopeRelationPayloadEvent,
  UserUpsertPayloadEvent,
} from '@sielus/events-lib';

import { EventHandlerService } from 'src/event-handler/event-handler.service';

@Controller()
export class EventHandlerController {
  constructor(
    @Inject('KAFKA') private readonly kafka: ClientKafka,
    private readonly eventHandlerService: EventHandlerService,
  ) {}

  @EventPattern('user-service.upsert-user')
  public async handleCreateUserEvent(
    @Payload() event: { event: UserUpsertPayloadEvent },
  ) {
    await this.eventHandlerService.upsertUser(event.event);
  }

  @EventPattern('user-service.remove-user')
  public async handleUpdateUserEvent(
    @Payload() event: { event: UserRemovePayloadEvent },
  ) {
    await this.eventHandlerService.removeUser(event.event);
  }

  @EventPattern('user-service.create-user-scope-relation')
  public async handleCreateUserScopeRelationEvent(
    @Payload() event: { event: UserScopeRelationPayloadEvent },
  ) {
    await this.eventHandlerService.createUserScoreRelation(event.event);
  }

  @EventPattern('user-service.remove-user-scope-relation')
  public async handleRemoveUserScopeRelationEvent(
    @Payload() event: { event: UserScopeRelationPayloadEvent },
  ) {
    await this.eventHandlerService.removeUserScopeRelation(event.event);
  }
}
