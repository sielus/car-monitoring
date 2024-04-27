import { Test, TestingModule } from '@nestjs/testing';
import { ScopeEntity } from 'src/admin/entities/scope.entity';
import { ScopeDaoService } from 'src/dao/scope/scope.dao.service';
import { ScopeExistException } from 'src/exceptions/scope-exist.exception';
import { PrismaService } from 'src/prisma/prisma.service';

describe('scope-dao-service', () => {
  let service: ScopeDaoService;
  let prisma: PrismaService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScopeDaoService, PrismaService],
    }).compile();

    service = module.get<ScopeDaoService>(ScopeDaoService);
    prisma = module.get<PrismaService>(PrismaService);
  });
  const mockUser = {
    id: 'mockId',
    login: 'mockLogin',
    password: 'mockPassword',
  };

  const mockScope = 'mock-scope';

  beforeAll(async () => {
    await prisma.user.create({ data: mockUser });
  });

  afterAll(async () => {
    await prisma.scope.deleteMany({ where: { scope: mockScope } });
    await prisma.user.deleteMany({ where: { id: mockUser.id } });
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
  });

  async function getUserScopeRelation(scopeId: string) {
    return prisma.userScopeRelation.findUnique({
      where: { scopeId_userId: { scopeId: scopeId, userId: mockUser.id } },
      select: {
        scope: { select: { scope: true } },
        user: { select: { login: true } },
      },
    });
  }

  describe('scope-integration tests', () => {
    test('scope should be created', async () => {
      try {
        const createdScope = await service.createScope({ scope: mockScope });
        expect(createdScope).toBeInstanceOf(ScopeEntity);
        expect(createdScope.scope).toBe(mockScope);
      } catch (exception) {
        expect(exception).toBeNull();
      }
    });

    test('should throw exception ScopeExistException', async () => {
      await expect(service.createScope({ scope: mockScope })).rejects.toThrow(
        ScopeExistException,
      );
    });

    test('scope should be added to user', async () => {
      try {
        const scope = await prisma.scope.findUnique({
          where: { scope: mockScope },
          select: { id: true },
        });
        await service.addScopeToUser({
          scopeId: scope.id,
          userId: mockUser.id,
        });

        const userScopeRelation = await getUserScopeRelation(scope.id);

        expect(userScopeRelation).not.toBeNull();
        expect(userScopeRelation.user.login).toBe(mockUser.login);
        expect(userScopeRelation.scope.scope).toBe(mockScope);
      } catch (exception) {
        expect(exception).toBeNull();
      }
    });

    test('scope should be removed from user', async () => {
      try {
        const scope = await prisma.scope.findUnique({
          where: { scope: mockScope },
          select: { id: true },
        });
        await service.removeScopeFromUser({
          scopeId: scope.id,
          userId: mockUser.id,
        });

        const userScopeRelation = await getUserScopeRelation(scope.id);

        expect(userScopeRelation).toBeNull();
      } catch (exception) {
        expect(exception).toBeNull();
      }
    });

    test('scope should be removed', async () => {
      try {
        const scope = await prisma.scope.findUnique({
          where: { scope: mockScope },
          select: { id: true },
        });

        const removedScope = await service.removeScope({ scopeId: scope.id });

        expect(removedScope).toBeInstanceOf(ScopeEntity);
        expect(removedScope).toEqual({ scope: mockScope, id: scope.id });
      } catch (exception) {
        expect(exception).toBeNull();
      }
    });
  });
});
