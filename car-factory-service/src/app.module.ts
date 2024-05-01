import { Module } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CronJobsModule } from 'src/cron-jobs/cron-jobs.module';
import { AppController } from 'src/app.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ScheduleModule } from '@nestjs/schedule';
import { CarDaoService } from './dao/car/car.dao.service';

@Module({
  imports: [CronJobsModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, PrismaService, CarDaoService],
})
export class AppModule {}
