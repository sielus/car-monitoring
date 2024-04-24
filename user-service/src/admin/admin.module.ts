import { Module } from '@nestjs/common';
import { AdminService } from 'src/admin/services/admin.service';
import { ScopeManageDaoService } from 'src/admin/services/scope-manage/dao/scope-manage.dao/scope-manage.dao.service';

import { ScopeManageService } from 'src/admin/services/scope-manage/scope-manage.service';
import { UserManageDaoService } from 'src/admin/services/user-manage/dao/user-manage.dao/user-manage.dao.service';
import { UserManageService } from 'src/admin/services/user-manage/user-manage.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AdminResolver } from './resolvers/admin-resolver.queries.resolver';
import { UserManageQueriesResolver } from './resolvers/user-manage.queries.resolver';

@Module({
  providers: [
    AdminService,
    UserManageDaoService,
    PrismaService,
    ScopeManageDaoService,
    UserManageDaoService,
    UserManageService,
    ScopeManageService,
    AdminResolver,
    UserManageQueriesResolver,
  ],
})
export class AdminModule {}
