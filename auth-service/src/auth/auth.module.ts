import { Module } from '@nestjs/common';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { UserDaoService } from 'src/auth/dao/user.dao/user.dao.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AuthController],
  exports: [AuthService],
  providers: [AuthService, UserDaoService, PrismaService],

})
export class AuthModule {}
