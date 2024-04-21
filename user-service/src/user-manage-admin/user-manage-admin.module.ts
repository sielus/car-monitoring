import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserManageAdminController } from 'src/user-manage-admin/controllers/user-manage-admin.controller';
import { UserManageAdminDaoService } from 'src/user-manage-admin/services/dao/user-manage-admin.dao.service';
import { UserManageAdminService } from 'src/user-manage-admin/services/user-manage-admin.service';
import { ScopeManageDaoService } from './services/scope-manage/dao/scope-manage.dao/scope-manage.dao.service';
import { AdminManageDaoService } from './services/dao/admin-manage.dao/admin-manage.dao.service';
import { AdminManageService } from './services/admin-manage/admin-manage/admin-manage.service';
import { ScopeManageService } from 'src/user-manage-admin/services/scope-manage/scope-manage.service';

@Module({
  controllers: [UserManageAdminController],
  providers: [UserManageAdminService, UserManageAdminDaoService, PrismaService, ScopeManageDaoService, AdminManageDaoService, AdminManageService, ScopeManageService],
})
export class UserManageAdminModule {}
