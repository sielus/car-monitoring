import { Args, ObjectType, ResolveField, Resolver } from '@nestjs/graphql';
import { ScopeIdArgDto } from 'src/admin/dto/scope/handle/scope-id.arg.dto';
import { ScopeArgDto } from 'src/admin/dto/scope/handle/scope.arg.dto';
import { UserScopeRelationArgDto } from 'src/admin/dto/scope/handle/user-scope-relation.arg.dto';
import { ScopeEntity } from 'src/admin/entities/scope.entity';
import { UserEntity } from 'src/admin/entities/user.entity';
import { AdminService } from 'src/admin/services/admin.service';

@ObjectType()
export class ScopeManageMutations {}

@Resolver(() => ScopeManageMutations)
export class ScopeManageMutationsResolver {
  constructor(private readonly adminService: AdminService) {}

  @ResolveField('create', () => ScopeEntity)
  public async createScope(
    @Args('input', { nullable: true })
    payload: ScopeArgDto,
  ) {
    return this.adminService.createScope(payload);
  }

  @ResolveField('remove', () => ScopeEntity)
  public async removeScope(
    @Args('input', { nullable: true })
    payload: ScopeIdArgDto,
  ) {
    return this.adminService.removeScope(payload);
  }

  @ResolveField('addToUser', () => UserEntity)
  public async createUserScopeRelation(
    @Args('input', { nullable: false })
    payload: UserScopeRelationArgDto,
  ) {
    return this.adminService.addScopeToUser(payload);
  }

  @ResolveField('removeFromUser', () => UserEntity)
  public async removeUserScopeRelation(
    @Args('input', { nullable: false })
    payload: UserScopeRelationArgDto,
  ) {
    return this.adminService.removeScopeFromUser(payload);
  }
}
