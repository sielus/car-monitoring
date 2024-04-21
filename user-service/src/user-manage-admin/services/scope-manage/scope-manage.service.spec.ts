import { Test, TestingModule } from '@nestjs/testing';
import { ScopeManageService } from 'src/user-manage-admin/services/scope-manage/scope-manage.service';

describe('ScopeManageService', () => {
  let service: ScopeManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScopeManageService],
    }).compile();

    service = module.get<ScopeManageService>(ScopeManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
