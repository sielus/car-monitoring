import { Injectable } from '@nestjs/common';
import { UserEventHandlerDaoService } from 'src/event-handler/dao/user-event-handler.dao/user-event-handler.dao.service';
import { UserUpsertPayloadEvent } from 'src/event-handler/dto/user-upsert-payload.event';

@Injectable()
export class EventHandlerService {
  constructor(
    private readonly userEventHandlerDaoService: UserEventHandlerDaoService,
  ) {}

  public async upsertUser(payload: UserUpsertPayloadEvent) {
    await this.userEventHandlerDaoService.upsertUser(payload);
  }
}
