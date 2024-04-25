import { Injectable } from '@nestjs/common';
import { ScopeSearchArgDto } from 'src/admin/dto/scope/search/scope-search.arg.dto';
import { UserSearchArgDto } from 'src/admin/dto/user/search/user-search.arg.dto';
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
  ): Promise<Array<string>> {
    return this.scopeManageService.getAllScopes(scopeArgPayload);
  }

  public async createScope() {
    await this.scopeManageService.createScope();
  }

  public async removeScope() {
    await this.scopeManageService.removeScope();
  }

  public async assignScopeToUser() {
    await this.scopeManageService.assignScopeToUser();
  }

  public async removeScopeFromUser() {
    await this.scopeManageService.removeScopeFromUser();
  }
}
