import { Injectable } from '@nestjs/common';
import { ScopeArgDto } from "src/admin/dto/scope/scope.arg.dto";
import { ScopeManageDaoService } from 'src/admin/services/scope-manage/dao/scope-manage.dao/scope-manage.dao.service';

@Injectable()
export class ScopeManageService {
  constructor(private readonly scopeManageDaoService: ScopeManageDaoService) {}

  public async getAllScopes(
    scopeArgPayload: ScopeArgDto,
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
