import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from '@sielus/auth';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { CronJobsModule } from 'src/cron-jobs/cron-jobs.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    CronJobsModule,
    ScheduleModule.forRoot(),
    UserModule,
    AuthModule.register(process.env.JWT_PUBLIC),
    AdminModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      playground: true,
      autoSchemaFile: { federation: 2 },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [AuthModule],
})
export class AppModule {}
