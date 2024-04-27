import { Test, TestingModule } from '@nestjs/testing';
import { UserManageService } from 'src/user/user-manage.service';
import { UserController } from './user.controller';

describe('UserManageController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserManageService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
