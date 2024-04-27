import { Test, TestingModule } from '@nestjs/testing';
import { ScopeDaoService } from 'src/dao/scope/scope.dao.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('ScopeManageDaoService', () => {
  let service: ScopeDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScopeDaoService, PrismaService],
    }).compile();

    service = module.get<ScopeDaoService>(ScopeDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
