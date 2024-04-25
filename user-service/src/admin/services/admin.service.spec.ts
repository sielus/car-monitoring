import { Test, TestingModule } from '@nestjs/testing';
import { ScopeEntity } from 'src/admin/entities/scope.entity';
import { AdminService } from 'src/admin/services/admin.service';
import { ScopeManageDaoService } from 'src/admin/services/scope-manage/dao/scope-manage.dao/scope-manage.dao.service';
import { ScopeManageService } from 'src/admin/services/scope-manage/scope-manage.service';
import { UserManageDaoService } from 'src/admin/services/user-manage/dao/user-manage.dao/user-manage.dao.service';
import { UserManageService } from 'src/admin/services/user-manage/user-manage.service';
import { RecordAlreadyExistException } from 'src/exceptions/record-already-exist.exception';
import { PrismaService } from 'src/prisma/prisma.service';

describe('UserManageAdminService', () => {
  let service: AdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminService,
        PrismaService,
        ScopeManageService,
        UserManageService,
        ScopeManageDaoService,
        UserManageDaoService,
      ],
    }).compile();

    service = module.get<AdminService>(AdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('integration tests', () => {
    describe('handling scope tests', () => {
      const mockScope = 'test-scope';

      test('scope should be created', async () => {
        try {
          const result = await service.createScope({ scope: mockScope });
          expect(result).toBeInstanceOf(ScopeEntity);
          expect(result?.id).not.toBeNull();
        } catch (exception) {
          expect(exception).toBeNull();
        }
      });

      test('should throw error RecordAlreadyExistException', async () => {
        await expect(
          service.createScope({ scope: mockScope }),
        ).rejects.toBeInstanceOf(RecordAlreadyExistException);
      });
    });
  });
});
