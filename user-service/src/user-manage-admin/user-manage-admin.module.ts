import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserManageAdminController } from 'src/user-manage-admin/controllers/user-manage-admin.controller';
import { AdminManageService } from 'src/user-manage-admin/services/admin-manage/admin-manage.service';
import { AdminManageDaoService } from 'src/user-manage-admin/services/admin-manage/dao/admin-manage.dao/admin-manage.dao.service';
import { ScopeManageDaoService } from 'src/user-manage-admin/services/scope-manage/dao/scope-manage.dao/scope-manage.dao.service';

import { ScopeManageService } from 'src/user-manage-admin/services/scope-manage/scope-manage.service';
import { UserManageAdminService } from 'src/user-manage-admin/services/user-manage-admin.service';

@Module({
  controllers: [UserManageAdminController],
  providers: [
    UserManageAdminService,
    AdminManageDaoService,
    PrismaService,
    ScopeManageDaoService,
    AdminManageDaoService,
    AdminManageService,
    ScopeManageService,
  ],
})
export class UserManageAdminModule {}
