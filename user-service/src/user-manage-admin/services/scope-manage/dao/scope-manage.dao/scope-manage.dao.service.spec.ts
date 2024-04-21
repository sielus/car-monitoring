import { Test, TestingModule } from '@nestjs/testing';
import { ScopeManageDaoService } from 'src/user-manage-admin/services/scope-manage/dao/scope-manage.dao/scope-manage.dao.service';

describe('ScopeManageDaoService', () => {
  let service: ScopeManageDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScopeManageDaoService],
    }).compile();

    service = module.get<ScopeManageDaoService>(ScopeManageDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
