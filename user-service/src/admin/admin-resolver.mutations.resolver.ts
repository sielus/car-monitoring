import { Mutation, ObjectType, ResolveField, Resolver } from '@nestjs/graphql';
import { ScopeManageMutations } from 'src/admin/resolvers/scope-manage.mutations.resolver';

@ObjectType()
export class AdminMutations {}

@Resolver(AdminMutations)
export class AdminQueriesResolver {
  // @UseGuards(GraphqlAuthGuard)
  // @Scope('admin')
  @Mutation(() => AdminMutations)
  public async admin() {
    return new AdminMutations();
  }

  @ResolveField(() => ScopeManageMutations, { name: 'scope' })
  public async scopeManageQueries() {
    return new ScopeManageMutations();
  }
}
