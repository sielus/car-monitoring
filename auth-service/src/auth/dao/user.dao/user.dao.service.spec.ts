import { Test, TestingModule } from '@nestjs/testing';
import { UserDaoService } from 'src/auth/dao/user.dao/user.dao.service';
import { PrismaService } from 'src/prisma.service';

describe('UserDaoService', () => {
  let service: UserDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDaoService, PrismaService],
    }).compile();

    service = module.get<UserDaoService>(UserDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
