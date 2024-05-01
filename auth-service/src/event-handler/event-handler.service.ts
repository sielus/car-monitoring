import { Injectable } from '@nestjs/common';
import {
  UserRemovePayloadEventDto,
  UserScopeRelationPayloadEventDto,
  UserUpsertPayloadEventDto,
} from '@sielus/events-lib';
import { UserEventHandlerDaoService } from 'src/event-handler/dao/user-event-handler.dao/user-event-handler.dao.service';
import { UserScopeRelationEventDaoService } from 'src/event-handler/dao/user-scope-relation-event.dao/user-scope-relation-event.dao.service';

@Injectable()
export class EventHandlerService {
  constructor(
    private readonly userEventHandlerDaoService: UserEventHandlerDaoService,
    private readonly userScopeRelationEventDaoService: UserScopeRelationEventDaoService,
  ) {}

  public async upsertUser(payload: UserUpsertPayloadEventDto) {
    await this.userEventHandlerDaoService.upsertUser(payload);
  }

  public async removeUser(event: UserRemovePayloadEventDto) {
    await this.userEventHandlerDaoService.removeUser(event.data);
  }

  public async createUserScoreRelation(
    event: UserScopeRelationPayloadEventDto,
  ) {
    await this.userScopeRelationEventDaoService.handleCreateEvent(event);
  }

  public async removeUserScopeRelation(
    event: UserScopeRelationPayloadEventDto,
  ) {
    await this.userScopeRelationEventDaoService.handleRemoveEvent(event);
  }
}
