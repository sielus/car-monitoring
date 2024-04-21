import { Test, TestingModule } from '@nestjs/testing';
import { UserEventHandlerDaoService } from './user-event-handler.dao.service';

describe('UserEventHandlerDaoService', () => {
  let service: UserEventHandlerDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserEventHandlerDaoService],
    }).compile();

    service = module.get<UserEventHandlerDaoService>(UserEventHandlerDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
