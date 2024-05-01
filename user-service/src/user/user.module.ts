import { Module } from '@nestjs/common';
import { AuthModule } from '@sielus/auth';
import { UserDaoService } from 'src/dao/user/user.dao.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserController } from 'src/user/controllers/user.controller';
import { UserService } from 'src/user/services/user.service';

@Module({
  controllers: [UserController],
  imports: [AuthModule],
  providers: [UserService, UserDaoService, PrismaService, UserDaoService],
})
export class UserModule {}
