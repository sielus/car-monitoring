import { Test, TestingModule } from '@nestjs/testing';
import { AdminManageDaoService } from './admin-manage.dao.service';

describe('AdminManageDaoService', () => {
  let service: AdminManageDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminManageDaoService],
    }).compile();

    service = module.get<AdminManageDaoService>(AdminManageDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
