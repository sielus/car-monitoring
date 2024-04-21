import { Test, TestingModule } from '@nestjs/testing';
import { UserEventDaoService } from './user-event.dao.service';

describe('UserEventDaoService', () => {
  let service: UserEventDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserEventDaoService],
    }).compile();

    service = module.get<UserEventDaoService>(UserEventDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
