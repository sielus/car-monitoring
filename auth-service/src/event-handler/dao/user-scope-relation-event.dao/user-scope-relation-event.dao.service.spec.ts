import { Test, TestingModule } from '@nestjs/testing';
import { UserScopeRelationEventDaoService } from './user-scope-relation-event.dao.service';

describe('UserScopeRelationEventDaoService', () => {
  let service: UserScopeRelationEventDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserScopeRelationEventDaoService],
    }).compile();

    service = module.get<UserScopeRelationEventDaoService>(UserScopeRelationEventDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
