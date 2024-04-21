import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { microserviceConfig } from 'src/config/KafkaConfig';
import { CronJobsController } from 'src/cron-jobs/cron-jobs.controller';
import { CronJobsService } from 'src/cron-jobs/cron-jobs.service';
import { UserEventDaoService } from 'src/cron-jobs/services/dao/user-event/user-event.dao.service';
import { EventSenderService } from 'src/cron-jobs/services/events/event-sender/event-sender.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserScopeRelationEventService } from './services/dao/user-scope-relation.event/user-scope-relation.event.service';

@Module({
  imports: [ClientsModule.register([microserviceConfig])],
  controllers: [CronJobsController],
  providers: [
    CronJobsService,
    EventSenderService,
    UserEventDaoService,
    PrismaService,
    UserScopeRelationEventService,
  ],
})
export class CronJobsModule {}
