import { Test, TestingModule } from '@nestjs/testing';
import { ScopeSearchArgDto } from 'src/admin/dto/scope/search/scope-search.arg.dto';
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
  let prisma: PrismaService;
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
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(prisma).toBeDefined();
  });

  describe('integration tests', () => {
    describe('handling scope tests', () => {
      const mockScope = 'test-scope';

      afterAll(async () => {
        await prisma.scope.deleteMany({ where: { scope: mockScope } });
      });

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

      test('should remove scope', async () => {
        try {
          const result = await service.removeScope({ scope: mockScope });
          expect(result).toBeInstanceOf(ScopeEntity);

          const newResult = await prisma.scope.findUnique({
            where: { scope: mockScope },
          });
          expect(newResult).toBeNull();
        } catch (exception) {
          expect(exception).toBeNull();
        }
      });

      test('should return empty array', async () => {
        try {
          const requestPayload = new ScopeSearchArgDto();
          requestPayload.search.scope = mockScope;
          const result = await service.getAllScopes(requestPayload);
          expect(result).toBeInstanceOf(Array<ScopeEntity>);
          expect(result.length).toBe(0);
        } catch (exception) {
          expect(exception).toBeNull();
        }
      });
    });
  });
});
