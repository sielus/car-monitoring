import {
  Args,
  Mutation,
  ObjectType,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ScopeIdArgDto } from 'src/admin/dto/scope/create/scope-id.arg.dto';
import { ScopeArgDto } from 'src/admin/dto/scope/create/scope.arg.dto';
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
    payload: UserSearchArgDto = new UserSearchArgDto(),
  ) {
    return this.adminService.getAllUser(payload);
  }

  @ResolveField(() => [ScopeEntity])
  public async scopes(
    @Args('input', { nullable: true })
    payload: ScopeSearchArgDto = new ScopeSearchArgDto(),
  ) {
    return this.adminService.getAllScopes(payload);
  }

  @Mutation(() => ScopeEntity)
  public async createScope(
    @Args('input', { nullable: true })
    payload: ScopeArgDto,
  ) {
    return this.adminService.createScope(payload);
  }

  @Mutation(() => ScopeEntity)
  public async removeScope(
    @Args('input', { nullable: true })
    payload: ScopeIdArgDto,
  ) {
    return this.adminService.removeScope(payload);
  }
}
