import { Test, TestingModule } from '@nestjs/testing';
import { UserManageAdminService } from './user-manage-admin.service';

describe('UserManageAdminService', () => {
  let service: UserManageAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserManageAdminService],
    }).compile();

    service = module.get<UserManageAdminService>(UserManageAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
