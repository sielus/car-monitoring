import { Injectable } from '@nestjs/common';
import { ScopeIdArgDto } from 'src/admin/dto/scope/handle/scope-id.arg.dto';
import { ScopeArgDto } from 'src/admin/dto/scope/handle/scope.arg.dto';
import { UserScopeRelationArgDto } from 'src/admin/dto/scope/handle/user-scope-relation.arg.dto';
import { ScopeSearchArgDto } from 'src/admin/dto/scope/search/scope-search.arg.dto';
import { ScopeEntity } from 'src/admin/entities/scope.entity';
import { ScopeDaoService } from 'src/dao/scope/scope.dao.service';

@Injectable()
export class ScopeManageService {
  constructor(private readonly scopeDaoService: ScopeDaoService) {}

  public async getAllScopes(
    scopeArgPayload: ScopeSearchArgDto,
  ): Promise<Array<ScopeEntity>> {
    return this.scopeDaoService.getAllScopes(scopeArgPayload);
  }

  public async createScope(payload: ScopeArgDto): Promise<ScopeEntity> {
    return this.scopeDaoService.createScope(payload);
  }

  public async removeScope(payload: ScopeIdArgDto): Promise<ScopeEntity> {
    return this.scopeDaoService.removeScope(payload);
  }

  public async addScopeToUser(payload: UserScopeRelationArgDto) {
    return this.scopeDaoService.addScopeToUser(payload);
  }

  public async removeScopeFromUser(payload: UserScopeRelationArgDto) {
    return this.scopeDaoService.removeScopeFromUser(payload);
  }
}
