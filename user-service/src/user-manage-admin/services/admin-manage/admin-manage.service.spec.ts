import { Test, TestingModule } from '@nestjs/testing';
import { AdminManageService } from './admin-manage.service';

describe('AdminManageService', () => {
  let service: AdminManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminManageService],
    }).compile();

    service = module.get<AdminManageService>(AdminManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
