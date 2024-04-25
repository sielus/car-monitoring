import { Test, TestingModule } from '@nestjs/testing';
import { ScopeManageDaoService } from 'src/admin/services/scope-manage/dao/scope-manage.dao/scope-manage.dao.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('ScopeManageDaoService', () => {
  let service: ScopeManageDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScopeManageDaoService, PrismaService],
    }).compile();

    service = module.get<ScopeManageDaoService>(ScopeManageDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
