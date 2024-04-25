import { Args, ObjectType, ResolveField, Resolver } from '@nestjs/graphql';
import { ScopeSearchArgDto } from 'src/admin/dto/scope/search/scope-search.arg.dto';
import { UserSearchArgDto } from 'src/admin/dto/user/search/user-search.arg.dto';
import { ScopeEntity } from 'src/admin/entities/scope.entity';
import { UserEntity } from 'src/admin/entities/user.entity';
import { AdminService } from 'src/admin/services/admin.service';

@ObjectType()
export class UserManageQueries {}

@Resolver(() => UserManageQueries)
export class UserManageQueriesResolver {
  constructor(private readonly adminService: AdminService) {}

  @ResolveField(() => [UserEntity])
  public async users(
    @Args('input', { nullable: true })
    userArgPayload: UserSearchArgDto = new UserSearchArgDto(),
  ) {
    return this.adminService.getAllUser(userArgPayload);
  }

  @ResolveField(() => [ScopeEntity])
  public async scopes(
    @Args('input', { nullable: true })
    scopeArgPayload: ScopeSearchArgDto = new ScopeSearchArgDto(),
  ) {
    return this.adminService.getAllScopes(scopeArgPayload);
  }
}
