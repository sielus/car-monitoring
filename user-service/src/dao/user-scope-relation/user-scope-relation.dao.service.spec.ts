import { Test, TestingModule } from '@nestjs/testing';
import { UserScopeRelationDaoService } from 'src/dao/user-scope-relation/user-scope-relation.dao.service';

describe('UserScopeRelationEventService', () => {
  let service: UserScopeRelationDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserScopeRelationDaoService],
    }).compile();

    service = module.get<UserScopeRelationDaoService>(
      UserScopeRelationDaoService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
