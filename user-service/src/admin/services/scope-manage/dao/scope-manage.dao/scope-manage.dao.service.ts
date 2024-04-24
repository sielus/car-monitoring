import { Injectable, NotImplementedException } from '@nestjs/common';
import { ScopeArgDto } from 'src/admin/dto/scope/scope.arg.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ScopeManageDaoService {
  constructor(private readonly prisma: PrismaService) {}

  public async getAllScopes(
    scopeArgPayload: ScopeArgDto,
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
