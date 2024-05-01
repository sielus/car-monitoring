import { Module } from '@nestjs/common';
import { CronJobsService } from './cron-jobs.service';
import { CronJobsController } from './cron-jobs.controller';
import { EventSenderService } from './services/events/event-sender/event-sender.service';
import { ClientsModule } from '@nestjs/microservices';
import { microserviceConfig } from 'src/config/KafkaConfig';

@Module({
  controllers: [CronJobsController],
  providers: [CronJobsService, EventSenderService],
  imports: [ClientsModule.register([microserviceConfig])],
})
export class CronJobsModule {}
