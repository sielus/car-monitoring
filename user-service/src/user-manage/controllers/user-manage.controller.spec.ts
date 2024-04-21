import { Test, TestingModule } from '@nestjs/testing';
import { UserManageService } from 'src/user-manage/user-manage.service';
import { UserManageController } from './user-manage.controller';

describe('UserManageController', () => {
  let controller: UserManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserManageController],
      providers: [UserManageService],
    }).compile();

    controller = module.get<UserManageController>(UserManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
