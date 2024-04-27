import { Module } from '@nestjs/common';
import { AdminQueriesResolver } from 'src/admin/admin-resolver.mutations.resolver';
import { AdminMutationsResolver } from 'src/admin/admin-resolver.queries.resolver';
import { ScopeManageMutationsResolver } from 'src/admin/resolvers/scope-manage.mutations.resolver';
import { UserManageQueriesResolver } from 'src/admin/resolvers/user-manage.queries.resolver';
import { AdminService } from 'src/admin/services/admin.service';
import { ScopeManageDaoService } from 'src/admin/services/scope-manage/dao/scope-manage.dao/scope-manage.dao.service';

import { ScopeManageService } from 'src/admin/services/scope-manage/scope-manage.service';
import { UserManageDaoService } from 'src/admin/services/user-manage/dao/user-manage.dao/user-manage.dao.service';
import { UserManageService } from 'src/admin/services/user-manage/user-manage.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [
    AdminService,
    UserManageDaoService,
    PrismaService,
    ScopeManageDaoService,
    UserManageDaoService,
    UserManageService,
    ScopeManageService,
    AdminMutationsResolver,
    AdminQueriesResolver,
    UserManageQueriesResolver,
    ScopeManageMutationsResolver,
  ],
})
export class AdminModule {}
