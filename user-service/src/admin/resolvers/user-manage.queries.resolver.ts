import { Args, ObjectType, ResolveField, Resolver } from '@nestjs/graphql';
import { ScopeArgDto } from 'src/admin/dto/scope/scope.arg.dto';
import { UserArgDto } from 'src/admin/dto/user/user.arg.dto';
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
    userArgPayload: UserArgDto = new UserArgDto(),
  ) {
    return this.adminService.getAllUser(userArgPayload);
  }

  @ResolveField(() => [String])
  public async scopes(
    @Args('input', { nullable: true })
    scopeArgPayload: ScopeArgDto = new ScopeArgDto(),
  ) {
    return this.adminService.getAllScopes(scopeArgPayload);
  }
}
