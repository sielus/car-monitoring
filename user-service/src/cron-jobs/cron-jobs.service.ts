import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { UserEventDaoService } from 'src/cron-jobs/services/dao/user-event/user-event.dao.service';
import { UserScopeRelationEventService } from 'src/cron-jobs/services/dao/user-scope-relation.event/user-scope-relation.event.service';
import { UserRemovePayloadEvent } from 'src/cron-jobs/services/events/dto/user-remove-payload.event';
import { UserScopeRelationPayloadEvent } from 'src/cron-jobs/services/events/dto/user-scope-relation-payload.event';
import { UserUpsertPayloadEvent } from 'src/cron-jobs/services/events/dto/user-upsert-payload.event';
import { EventSenderService } from 'src/cron-jobs/services/events/event-sender/event-sender.service';

@Injectable()
export class CronJobsService {
  constructor(
    private readonly eventSender: EventSenderService,
    private readonly userEventDao: UserEventDaoService,
    private readonly userScopeRelationEventDao: UserScopeRelationEventService,
  ) {}

  public async sendUserUpsertEvents() {
    const data: UserUpsertPayloadEvent[] =
      await this.userEventDao.getUnPublishedUpsertUsers();
    for (const record of data) {
      this.eventSender.emitUpsertUser(record);
      await this.userEventDao.updateIsPublishedStatus(record.data.userId, true);
    }
  }

  public async sendUserRemoveEvents() {
    const data: UserRemovePayloadEvent[] =
      await this.userEventDao.getUnPublishedRemoveUsers();
    for (const record of data) {
      this.eventSender.emitRemoveUser(record);
      await this.userEventDao.updateIsPublishedStatus(record.data.userId, true);
    }
  }

  public async sendUserScopeRelationUpsertEvents() {
    const data: UserScopeRelationPayloadEvent[] =
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
    const data: UserScopeRelationPayloadEvent[] =
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
