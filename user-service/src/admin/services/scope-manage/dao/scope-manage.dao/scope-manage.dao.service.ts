import { Injectable, NotImplementedException } from '@nestjs/common';
import { ScopeSearchArgDto } from 'src/admin/dto/scope/search/scope-search.arg.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ScopeManageDaoService {
  constructor(private readonly prisma: PrismaService) {}

  public async getAllScopes(
    scopeArgPayload: ScopeSearchArgDto,
  ): Promise<Array<string>> {
    const data = await this.prisma.scope.findMany({
      take: scopeArgPayload.pagination.take,
      skip: scopeArgPayload.pagination.skip,
      select: { scope: true },
      where: { scope: { contains: scopeArgPayload?.search?.scope } },
    });
    return data.map((value) => {
      return value.scope;
    });
  }

  public async createScope() {
    throw new NotImplementedException();
  }

  public async removeScope() {
    throw new NotImplementedException();
  }

  public async assignScopeToUser() {
    throw new NotImplementedException();
  }

  public async removeScopeFromUser() {
    throw new NotImplementedException();
  }
}
