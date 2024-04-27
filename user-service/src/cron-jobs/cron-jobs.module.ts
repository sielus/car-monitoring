import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { microserviceConfig } from 'src/config/KafkaConfig';
import { CronJobsController } from 'src/cron-jobs/cron-jobs.controller';
import { CronJobsService } from 'src/cron-jobs/cron-jobs.service';
import { EventSenderService } from 'src/cron-jobs/services/events/event-sender/event-sender.service';
import { UserEventDaoService } from 'src/dao/user-event/user-event.dao.service';
import { UserScopeRelationDaoService } from 'src/dao/user-scope-relation/user-scope-relation.dao.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [ClientsModule.register([microserviceConfig])],
  controllers: [CronJobsController],
  providers: [
    CronJobsService,
    EventSenderService,
    UserEventDaoService,
    PrismaService,
    UserScopeRelationDaoService,
  ],
})
export class CronJobsModule {}
