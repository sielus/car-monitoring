import { Injectable, NotImplementedException } from '@nestjs/common';
import { ScopeArgDto } from 'src/admin/dto/scope/create/scope.arg.dto';
import { ScopeSearchArgDto } from 'src/admin/dto/scope/search/scope-search.arg.dto';
import { ScopeEntity } from 'src/admin/entities/scope.entity';
import { RecordAlreadyExistException } from 'src/exceptions/record-already-exist.exception';
import { RecordNotFoundException } from 'src/exceptions/record-not-found.exception';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ScopeManageDaoService {
  constructor(private readonly prisma: PrismaService) {}

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
    const data = await this.getScopeId(payload);
    if (data) {
      throw new RecordAlreadyExistException();
    }
    const result = await this.prisma.scope.create({
      data: { scope: payload.scope },
      select: { scope: true, id: true },
    });

    return new ScopeEntity(result);
  }

  public async removeScope(payload: ScopeArgDto): Promise<ScopeEntity> {
    const scopeId = await this.getScopeId(payload);
    if (!scopeId) {
      throw new RecordNotFoundException();
    }
    await this.prisma.scope.delete({ where: { id: scopeId.id } });
    return new ScopeEntity({ scope: payload.scope, id: scopeId.id });
  }

  public async assignScopeToUser() {
    throw new NotImplementedException();
  }

  public async removeScopeFromUser() {
    throw new NotImplementedException();
  }

  private async getScopeId(payload: ScopeArgDto) {
    return this.prisma.scope.findUnique({
      where: { scope: payload.scope },
      select: { id: true },
    });
  }
}
