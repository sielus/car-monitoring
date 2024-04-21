import { Injectable } from '@nestjs/common';
import e from 'express';
import { UserEventHandlerDaoService } from 'src/event-handler/dao/user-event-handler.dao/user-event-handler.dao.service';
import { UserScopeRelationEventDaoService } from 'src/event-handler/dao/user-scope-relation-event.dao/user-scope-relation-event.dao.service';
import { UserRemovePayloadEvent } from 'src/event-handler/dto/user-remove-payload.event';
import { UserScopeRelationPayloadEvent } from 'src/event-handler/dto/user-scope-relation-payload.event';
import { UserUpsertPayloadEvent } from 'src/event-handler/dto/user-upsert-payload.event';

@Injectable()
export class EventHandlerService {
  constructor(
    private readonly userEventHandlerDaoService: UserEventHandlerDaoService,
    private readonly userScopeRelationEventDaoService: UserScopeRelationEventDaoService,
  ) {}

  public async upsertUser(payload: UserUpsertPayloadEvent) {
    await this.userEventHandlerDaoService.upsertUser(payload);
  }

  public async removeUser(event: UserRemovePayloadEvent) {
    await this.userEventHandlerDaoService.removeUser(event);
  }

  public async createUserScoreRelation(event: UserScopeRelationPayloadEvent) {
    await this.userScopeRelationEventDaoService.handleCreateEvent(event);
  }

  public async removeUserScopeRelation(event: UserScopeRelationPayloadEvent) {
    await this.userScopeRelationEventDaoService.handleRemoveEvent(event);

  }
}
