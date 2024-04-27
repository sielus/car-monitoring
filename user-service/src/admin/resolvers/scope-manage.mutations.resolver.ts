import { NotImplementedException } from '@nestjs/common';
import { Args, ObjectType, ResolveField, Resolver } from '@nestjs/graphql';
import { ScopeIdArgDto } from 'src/admin/dto/scope/create/scope-id.arg.dto';
import { ScopeArgDto } from 'src/admin/dto/scope/create/scope.arg.dto';
import { ScopeEntity } from 'src/admin/entities/scope.entity';
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

  @ResolveField('addToUser', () => ScopeEntity)
  public async createUserScopeRelation() {
    throw new NotImplementedException();
  }

  @ResolveField('removeFromUser', () => ScopeEntity)
  public async removeUserScopeRelation() {
    throw new NotImplementedException();
  }
}
