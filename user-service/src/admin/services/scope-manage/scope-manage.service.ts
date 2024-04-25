import { Injectable } from '@nestjs/common';
import { ScopeSearchArgDto } from 'src/admin/dto/scope/search/scope-search.arg.dto';
import { ScopeManageDaoService } from 'src/admin/services/scope-manage/dao/scope-manage.dao/scope-manage.dao.service';

@Injectable()
export class ScopeManageService {
  constructor(private readonly scopeManageDaoService: ScopeManageDaoService) {}

  public async getAllScopes(
    scopeArgPayload: ScopeSearchArgDto,
  ): Promise<Array<string>> {
    return this.scopeManageDaoService.getAllScopes(scopeArgPayload);
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
