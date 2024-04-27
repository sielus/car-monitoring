import { Injectable } from '@nestjs/common';
import { isNullish } from 'remeda';
import { ScopeIdArgDto } from 'src/admin/dto/scope/handle/scope-id.arg.dto';
import { ScopeArgDto } from 'src/admin/dto/scope/handle/scope.arg.dto';
import { UserScopeRelationArgDto } from 'src/admin/dto/scope/handle/user-scope-relation.arg.dto';
import { ScopeSearchArgDto } from 'src/admin/dto/scope/search/scope-search.arg.dto';
import { UserSearchArgDto } from 'src/admin/dto/user/search/user-search.arg.dto';
import { ScopeEntity } from 'src/admin/entities/scope.entity';
import { UserDaoService } from 'src/dao/user/user.dao.service';
import { ScopeExistException } from 'src/exceptions/scope-exist.exception';
import { ScopeNotFoundException } from 'src/exceptions/scope-not-found.exception';
import { UserScopeRelationExistException } from 'src/exceptions/user-scope-relation-exist.exception';
import { UserScopeRelationNotFoundException } from 'src/exceptions/user-scope-relation-not-found.exception';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ScopeDaoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userDaoService: UserDaoService,
  ) {}

  public async getAllScopes(
    scopeArgPayload: ScopeSearchArgDto,
  ): Promise<Array<ScopeEntity>> {
    const data = await this.prisma.scope.findMany({
      take: scopeArgPayload.pagination.take,
      skip: scopeArgPayload.pagination.skip,
      select: { scope: true, id: true },
      where: { scope: { contains: scopeArgPayload?.search?.scope } },
    });
    return data.map((value) => {
      return new ScopeEntity({ id: value.id, scope: value.scope });
    });
  }

  public async createScope(payload: ScopeArgDto): Promise<ScopeEntity> {
    const data = await this.prisma.scope.findUnique({
      where: { scope: payload.scope },
      select: { id: true },
    });
    if (!isNullish(data)) {
      throw new ScopeExistException();
    }
    const result = await this.prisma.scope.create({
      data: { scope: payload.scope },
      select: { scope: true, id: true },
    });

    return new ScopeEntity(result);
  }

  public async removeScope(payload: ScopeIdArgDto): Promise<ScopeEntity> {
    const scopeData = await this.prisma.scope.findUnique({
      where: { id: payload.scopeId },
      select: { id: true, scope: true },
    });
    if (isNullish(scopeData)) {
      throw new ScopeNotFoundException();
    }
    await this.prisma.scope.delete({ where: { id: scopeData.id } });
    return new ScopeEntity({ scope: scopeData.scope, id: scopeData.id });
  }

  public async addScopeToUser(payload: UserScopeRelationArgDto) {
    await this.checkIfScopeExist(payload.scopeId);
    await this.userDaoService.checkIfUserIdExist(payload.userId);

    const relationId = await this.getUserScopeRelation(payload);

    if (!isNullish(relationId)) {
      throw new UserScopeRelationExistException();
    }

    await this.prisma.userScopeRelation.create({
      data: { scopeId: payload.scopeId, userId: payload.userId },
    });

    const userSearchArg = new UserSearchArgDto();
    userSearchArg.search = { userId: [payload.userId] };
    const updatedUser = await this.userDaoService.getAllUser(userSearchArg);
    return updatedUser[0];
  }

  public async removeScopeFromUser(payload: UserScopeRelationArgDto) {
    await this.checkIfScopeExist(payload.scopeId);
    await this.userDaoService.checkIfUserIdExist(payload.userId);
    const relationId = await this.getUserScopeRelation(payload);

    if (isNullish(relationId)) {
      throw new UserScopeRelationNotFoundException();
    }

    await this.prisma.userScopeRelation.delete({
      where: {
        id: relationId.id,
      },
    });

    const userSearchArg = new UserSearchArgDto();
    userSearchArg.search = { userId: [payload.userId] };
    const updatedUser = await this.userDaoService.getAllUser(userSearchArg);
    return updatedUser[0];
  }

  private async checkIfScopeExist(scopeId: string) {
    const scopeData = await this.prisma.scope.findUnique({
      where: { id: scopeId },
      select: { id: true },
    });
    if (isNullish(scopeData)) {
      throw new ScopeNotFoundException();
    }
  }

  private async getUserScopeRelation(payload: UserScopeRelationArgDto) {
    return this.prisma.userScopeRelation.findUnique({
      where: {
        scopeId_userId: { scopeId: payload.scopeId, userId: payload.userId },
      },
      select: { id: true },
    });
  }
}
