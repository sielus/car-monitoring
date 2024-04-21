import { Test, TestingModule } from '@nestjs/testing';
import { UserManageAdminController } from './user-manage-admin.controller';
import { UserManageAdminService } from './user-manage-admin.service';

describe('UserManageAdminController', () => {
  let controller: UserManageAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserManageAdminController],
      providers: [UserManageAdminService],
    }).compile();

    controller = module.get<UserManageAdminController>(UserManageAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
