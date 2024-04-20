import { Controller, Inject } from '@nestjs/common';
import {
  ClientKafka,
  EventPattern,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { UserRemovePayloadEvent } from 'src/event-handler/dto/user-remove-payload.event';
import { UserUpsertPayloadEvent } from 'src/event-handler/dto/user-upsert-payload.event';
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
}
