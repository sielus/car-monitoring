import { Test, TestingModule } from '@nestjs/testing';
import { UserScopeRelationEventService } from 'src/dao/user-scope-relation.event/user-scope-relation.event.service';

describe('UserScopeRelationEventService', () => {
  let service: UserScopeRelationEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserScopeRelationEventService],
    }).compile();

    service = module.get<UserScopeRelationEventService>(
      UserScopeRelationEventService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
