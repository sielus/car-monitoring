import { Injectable } from '@nestjs/common';
import {
  UserRemovePayloadEvent,
  UserScopeRelationPayloadEvent,
  UserUpsertPayloadEvent,
} from '@sielus/events-lib';
import { UserEventHandlerDaoService } from 'src/event-handler/dao/user-event-handler.dao/user-event-handler.dao.service';
import { UserScopeRelationEventDaoService } from 'src/event-handler/dao/user-scope-relation-event.dao/user-scope-relation-event.dao.service';

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
