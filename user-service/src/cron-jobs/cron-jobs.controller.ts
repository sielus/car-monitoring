import { Controller } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CronJobsService } from './cron-jobs.service';

@Controller()
export class CronJobsController {
  constructor(private readonly cronJobsService: CronJobsService) {}

  @Cron(CronExpression.EVERY_MINUTE)
  public async handleUserUpsert() {
    await this.cronJobsService.sendUserUpsertEvents();
    await this.cronJobsService.sendUserRemoveEvents();

    await this.cronJobsService.sendUserScopeRelationUpsertEvents();
    await this.cronJobsService.sendUserScopeRelationRemoveEvents();
  }
}
