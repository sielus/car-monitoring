import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ScopeManageDaoService {
  constructor(private readonly prisma: PrismaService) {}

  public async getAllScopes() {
    throw new NotImplementedException();
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
