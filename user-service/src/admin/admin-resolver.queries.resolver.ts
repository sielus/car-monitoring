import { ObjectType, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserManageQueries } from 'src/admin/resolvers/user-manage.queries.resolver';

@ObjectType()
export class AdminQueries {}

@Resolver(AdminQueries)
export class AdminMutationsResolver {
  // @UseGuards(GraphqlAuthGuard)
  // @Scope('admin')
  @Query(() => AdminQueries)
  public async admin() {
    return new AdminQueries();
  }

  @ResolveField(() => UserManageQueries, { name: 'userManage' })
  public async userManageMutations() {
    return new UserManageQueries();
  }
}
