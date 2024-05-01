import { Injectable } from '@nestjs/common';
import {
  UserRemovePayloadEventDto,
  UserScopeRelationPayloadEventDto,
  UserUpsertPayloadEventDto,
} from '@sielus/events-lib';

import { EventSenderService } from 'src/cron-jobs/services/events/event-sender/event-sender.service';
import { UserEventDaoService } from 'src/dao/user-event/user-event.dao.service';
import { UserScopeRelationDaoService } from 'src/dao/user-scope-relation/user-scope-relation.dao.service';

@Injectable()
export class CronJobsService {
  constructor(
    private readonly eventSender: EventSenderService,
    private readonly userEventDao: UserEventDaoService,
    private readonly userScopeRelationEventDao: UserScopeRelationDaoService,
  ) {}

  public async sendUserUpsertEvents() {
    const data: UserUpsertPayloadEventDto[] =
      await this.userEventDao.getUnPublishedUpsertUsers();
    for (const record of data) {
      this.eventSender.emitUpsertUser(record);
      await this.userEventDao.updateIsPublishedStatus(record.data.userId, true);
    }
  }

  public async sendUserRemoveEvents() {
    const data: UserRemovePayloadEventDto[] =
      await this.userEventDao.getUnPublishedRemoveUsers();
    for (const record of data) {
      this.eventSender.emitRemoveUser(record);
      await this.userEventDao.updateIsPublishedStatus(record.data.userId, true);
    }
  }

  public async sendUserScopeRelationUpsertEvents() {
    const data: UserScopeRelationPayloadEventDto[] =
      await this.userScopeRelationEventDao.getUnPublishedCreateUserScopeRelation();

    for (const record of data) {
      this.eventSender.emitCreateUserScopeRelation(record);
      await this.userScopeRelationEventDao.updateIsPublishedScopeRelationStatus(
        record.data,
        true,
      );
    }
  }

  public async sendUserScopeRelationRemoveEvents() {
    const data: UserScopeRelationPayloadEventDto[] =
      await this.userScopeRelationEventDao.getUnPublishedRemoveUserScopeRelation();

    for (const record of data) {
      this.eventSender.emitRemoveUserScopeRelation(record);
      await this.userScopeRelationEventDao.updateIsPublishedScopeRelationStatus(
        record.data,
        true,
      );
    }
  }
}
