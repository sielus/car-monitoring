import { Injectable } from '@nestjs/common';
import { ScopeIdArgDto } from 'src/admin/dto/scope/handle/scope-id.arg.dto';
import { ScopeArgDto } from 'src/admin/dto/scope/handle/scope.arg.dto';
import { UserScopeRelationArgDto } from 'src/admin/dto/scope/handle/user-scope-relation.arg.dto';
import { ScopeSearchArgDto } from 'src/admin/dto/scope/search/scope-search.arg.dto';
import { UserSearchArgDto } from 'src/admin/dto/user/search/user-search.arg.dto';
import { ScopeEntity } from 'src/admin/entities/scope.entity';
import { UserEntity } from 'src/admin/entities/user.entity';
import { ScopeManageService } from 'src/admin/services/scope-manage/scope-manage.service';
import { UserManageService } from 'src/admin/services/user-manage/user-manage.service';

@Injectable()
export class AdminService {
  constructor(
    private readonly scopeManageService: ScopeManageService,
    private readonly userManageService: UserManageService,
  ) {}

  public async getAllUser(
    userArgPayload: UserSearchArgDto,
  ): Promise<Array<UserEntity>> {
    return this.userManageService.getAllUser(userArgPayload);
  }

  public async getAllScopes(
    scopeArgPayload: ScopeSearchArgDto,
  ): Promise<Array<ScopeEntity>> {
    return this.scopeManageService.getAllScopes(scopeArgPayload);
  }

  public async createScope(payload: ScopeArgDto): Promise<ScopeEntity> {
    return this.scopeManageService.createScope(payload);
  }

  public async removeScope(payload: ScopeIdArgDto): Promise<ScopeEntity> {
    return this.scopeManageService.removeScope(payload);
  }

  public async addScopeToUser(
    payload: UserScopeRelationArgDto,
  ): Promise<UserEntity> {
    return this.scopeManageService.addScopeToUser(payload);
  }

  public async removeScopeFromUser(
    payload: UserScopeRelationArgDto,
  ): Promise<UserEntity> {
    return this.scopeManageService.removeScopeFromUser(payload);
  }
}
