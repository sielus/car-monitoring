import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserController } from 'src/user/controllers/user.controller';
import { UserDaoService } from 'src/user/services/dao/user.dao.service';
import { UserService } from 'src/user/services/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserDaoService, PrismaService],
})
export class UserModule {}
