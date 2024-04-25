import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserManageDaoService } from './user-manage.dao.service';

describe('AdminManageDaoService', () => {
  let service: UserManageDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserManageDaoService, PrismaService],
    }).compile();

    service = module.get<UserManageDaoService>(UserManageDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
