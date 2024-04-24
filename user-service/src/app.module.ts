import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { ScheduleModule } from '@nestjs/schedule';
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
    JwtModule.register({
      publicKey: process.env.JWT_PUBLIC,
      signOptions: { algorithm: 'RS512' },
      global: true,
    }),
    AdminModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      playground: true,
      autoSchemaFile: { federation: 2 },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
