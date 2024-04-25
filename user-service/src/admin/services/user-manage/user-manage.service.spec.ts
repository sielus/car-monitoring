import { Test, TestingModule } from '@nestjs/testing';
import { UserManageDaoService } from 'src/admin/services/user-manage/dao/user-manage.dao/user-manage.dao.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserManageService } from './user-manage.service';

describe('AdminManageService', () => {
  let service: UserManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserManageService, UserManageDaoService, PrismaService],
    }).compile();

    service = module.get<UserManageService>(UserManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
