import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from "@nestjs/jwt";
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { CronJobsModule } from 'src/cron-jobs/cron-jobs.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserManageModule } from './user-manage/user-manage.module';

@Module({
  imports: [
    CronJobsModule,
    ScheduleModule.forRoot(),
    UserManageModule,
    JwtModule.register({
      publicKey: process.env.JWT_PUBLIC,
      signOptions: { algorithm: 'RS512' },
      global: true,
    }),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   playground: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
