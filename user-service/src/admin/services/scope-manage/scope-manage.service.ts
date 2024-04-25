import { Injectable } from '@nestjs/common';
import { ScopeArgDto } from 'src/admin/dto/scope/create/scope.arg.dto';
import { ScopeSearchArgDto } from 'src/admin/dto/scope/search/scope-search.arg.dto';
import { ScopeEntity } from 'src/admin/entities/scope.entity';
import { ScopeManageDaoService } from 'src/admin/services/scope-manage/dao/scope-manage.dao/scope-manage.dao.service';

@Injectable()
export class ScopeManageService {
  constructor(private readonly scopeManageDaoService: ScopeManageDaoService) {}

  public async getAllScopes(
    scopeArgPayload: ScopeSearchArgDto,
  ): Promise<Array<ScopeEntity>> {
    return this.scopeManageDaoService.getAllScopes(scopeArgPayload);
  }

  public async createScope(payload: ScopeArgDto): Promise<ScopeEntity> {
    return this.scopeManageDaoService.createScope(payload);
  }

  public async removeScope(payload: ScopeArgDto): Promise<ScopeEntity> {
    return this.scopeManageDaoService.removeScope(payload);
  }

  public async assignScopeToUser() {
    await this.scopeManageDaoService.assignScopeToUser();
  }

  public async removeScopeFromUser() {
    await this.scopeManageDaoService.removeScopeFromUser();
  }
}
