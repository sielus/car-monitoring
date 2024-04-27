import { Test, TestingModule } from '@nestjs/testing';
import { UserManageDaoService } from 'src/dao/user/user-manage.dao/user-manage.dao.service';
import { UserLoginExistException } from 'src/exceptions/user-login-exist.exception';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserConfigDto } from 'src/user/dto/update-user.config.dto';

describe('UserManageDaoService', () => {
  let service: UserManageDaoService;
  let prisma: PrismaService;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserManageDaoService, PrismaService],
    }).compile();

    service = module.get<UserManageDaoService>(UserManageDaoService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
    expect(prisma).toBeDefined();
  });

  describe('integration-create-tests', () => {
    const mockCreateUser: CreateUserDto = {
      login: 'mockLogin',
      password: 'mockPassword',
    };
    afterAll(async () => {
      await prisma.user.deleteMany({ where: { login: mockCreateUser.login } });
    });
    test('user should be created', async () => {
      try {
        await service.createUser(mockCreateUser);
      } catch (exception) {
        expect(exception).toBeNull();
      }
    });

    test('should throw exception - User Login Exist', async () => {
      try {
        await service.createUser(mockCreateUser);
      } catch (exception) {
        expect(exception).toBeInstanceOf(UserLoginExistException);
      }
    });
  });

  describe('integration-update-tests', () => {
    const mockUser = {
      id: 'mockId',
      login: 'mockLogin',
      password: 'mockPassword',
    };

    const mockUpdateUser: UpdateUserConfigDto = {
      userId: mockUser.id,
      payload: {
        password: 'newMockPassword',
      },
    };
    beforeAll(async () => {
      await prisma.user.create({
        data: {
          id: mockUser.id,
          password: mockUser.password,
          login: mockUser.login,
        },
      });
    });
    afterAll(async () => {
      await prisma.user.deleteMany({ where: { id: mockUser.id } });
    });

    test('should update user', async () => {
      try {
        await service.updateUser(mockUpdateUser);

        const newData = await prisma.user.findUnique({
          where: { id: mockUser.id },
        });

        expect(newData.password).toBe(mockUpdateUser.payload.password);
      } catch (exception) {
        expect(exception).toBeNull();
      }
    });
  });
});
