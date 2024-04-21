import { Injectable } from '@nestjs/common';
import { ScopeManageDaoService } from 'src/user-manage-admin/services/scope-manage/dao/scope-manage.dao/scope-manage.dao.service';

@Injectable()
export class ScopeManageService {
  constructor(private readonly scopeManageDaoService: ScopeManageDaoService) {}

  public async getAllScopes() {
    await this.scopeManageDaoService.getAllScopes();
  }

  public async createScope() {
    await this.scopeManageDaoService.createScope();
  }

  public async removeScope() {
    await this.scopeManageDaoService.removeScope();
  }

  public async assignScopeToUser() {
    await this.scopeManageDaoService.assignScopeToUser();
  }

  public async removeScopeFromUser() {
    await this.scopeManageDaoService.removeScopeFromUser();
  }
}
