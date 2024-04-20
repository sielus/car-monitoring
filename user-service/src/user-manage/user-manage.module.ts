import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserManageController } from 'src/user-manage/controllers/user-manage.controller';
import { UserManageDaoService } from 'src/user-manage/services/dao/user-manage.dao/user-manage.dao.service';
import { UserManageService } from 'src/user-manage/user-manage.service';

@Module({
  controllers: [UserManageController],
  providers: [UserManageService, UserManageDaoService, PrismaService],
})
export class UserManageModule {}
