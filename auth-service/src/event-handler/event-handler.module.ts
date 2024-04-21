import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { microserviceConfig } from 'src/config/KafkaConfig';
import { EventHandlerController } from 'src/event-handler/event-handler.controller';
import { EventHandlerService } from 'src/event-handler/event-handler.service';
import { PrismaService } from 'src/prisma.service';
import { UserEventHandlerDaoService } from './dao/user-event-handler.dao/user-event-handler.dao.service';
import { UserScopeRelationEventDaoService } from './dao/user-scope-relation-event.dao/user-scope-relation-event.dao.service';

@Module({
  imports: [ClientsModule.register([microserviceConfig])],
  controllers: [EventHandlerController],
  providers: [EventHandlerService, PrismaService, UserEventHandlerDaoService, UserScopeRelationEventDaoService],
})
export class EventHandlerModule {}
