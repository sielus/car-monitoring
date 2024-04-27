import { Module } from '@nestjs/common';
import { AdminQueriesResolver } from 'src/admin/admin-resolver.mutations.resolver';
import { AdminMutationsResolver } from 'src/admin/admin-resolver.queries.resolver';
import { ScopeManageMutationsResolver } from 'src/admin/resolvers/scope-manage.mutations.resolver';
import { UserManageQueriesResolver } from 'src/admin/resolvers/user-manage.queries.resolver';
import { AdminService } from 'src/admin/services/admin.service';

import { ScopeManageService } from 'src/admin/services/scope-manage/scope-manage.service';
import { UserManageService } from 'src/admin/services/user-manage/user-manage.service';
import { ScopeDaoService } from 'src/dao/scope/scope.dao.service';
import { UserDaoService } from 'src/dao/user/user.dao.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [
    AdminService,
    PrismaService,
    ScopeDaoService,
    UserManageService,
    ScopeManageService,
    AdminMutationsResolver,
    AdminQueriesResolver,
    UserManageQueriesResolver,
    ScopeManageMutationsResolver,
    UserDaoService,
  ],
})
export class AdminModule {}
