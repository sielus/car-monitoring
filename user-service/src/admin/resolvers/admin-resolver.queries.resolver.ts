import { ObjectType, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UserManageQueries } from './user-manage.queries.resolver';

@ObjectType()
export class AdminQueries {}

@Resolver(AdminQueries)
export class AdminResolver {
  // @UseGuards(JwtGraphQLAuthGuard)

  @Query(() => AdminQueries)
  public async admin() {
    return new AdminQueries();
  }

  @ResolveField(() => UserManageQueries, { name: 'userManage' })
  public async user() {
    return new UserManageQueries();
  }
}