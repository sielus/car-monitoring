import { Injectable } from '@nestjs/common';
import { ScopeIdArgDto } from 'src/admin/dto/scope/handle/scope-id.arg.dto';
import { ScopeArgDto } from 'src/admin/dto/scope/handle/scope.arg.dto';
import { UserScopeRelationArgDto } from 'src/admin/dto/scope/handle/user-scope-relation.arg.dto';
import { ScopeSearchArgDto } from 'src/admin/dto/scope/search/scope-search.arg.dto';
import { UserSearchArgDto } from 'src/admin/dto/user/search/user-search.arg.dto';
import { ScopeEntity } from 'src/admin/entities/scope.entity';
import { UserEntity } from 'src/admin/entities/user.entity';
import { ScopeDaoService } from 'src/dao/scope/scope.dao.service';
import { UserDaoService } from 'src/dao/user/user.dao.service';

@Injectable()
export class ScopeManageService {
  constructor(
    private readonly scopeDaoService: ScopeDaoService,
    private readonly userDaoService: UserDaoService,
  ) {}

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

  public async addScopeToUser(
    payload: UserScopeRelationArgDto,
  ): Promise<UserEntity> {
    await this.userDaoService.checkIfUserIdExist(payload.userId);
    await this.scopeDaoService.addScopeToUser(payload);

    return this.getUserData(payload.userId);
  }

  public async removeScopeFromUser(payload: UserScopeRelationArgDto) {
    await this.userDaoService.checkIfUserIdExist(payload.userId);
    await this.scopeDaoService.removeScopeFromUser(payload);

    return this.getUserData(payload.userId);
  }

  private async getUserData(userId: string) {
    const userSearchArg = new UserSearchArgDto();
    userSearchArg.search = { userId: [userId] };
    const updatedUser = await this.userDaoService.getAllUser(userSearchArg);
    return updatedUser[0];
  }
}
