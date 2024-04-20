import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { microserviceConfig } from 'src/config/KafkaConfig';
import { EventHandlerController } from 'src/event-handler/event-handler.controller';
import { EventHandlerService } from 'src/event-handler/event-handler.service';
import { PrismaService } from 'src/prisma.service';
import { UserEventHandlerDaoService } from './dao/user-event-handler.dao/user-event-handler.dao.service';

@Module({
  imports: [ClientsModule.register([microserviceConfig])],
  controllers: [EventHandlerController],
  providers: [EventHandlerService, PrismaService, UserEventHandlerDaoService],
})
export class EventHandlerModule {}
