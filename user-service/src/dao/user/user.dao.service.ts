import { Injectable } from '@nestjs/common';
import { isNullish } from 'remeda';
import { UserSearchArgDto } from 'src/admin/dto/user/search/user-search.arg.dto';
import { UserEntity } from 'src/admin/entities/user.entity';
import { UserExistException } from 'src/exceptions/user-exist.exception';
import { UserNotFoundException } from 'src/exceptions/user-not-found.exception';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserConfigDto } from 'src/user/dto/update-user.config.dto';
import { UserDetailsEntity } from 'src/user/entities/user-details.entity';

@Injectable()
export class UserDaoService {
  constructor(private readonly prisma: PrismaService) {}

  public async createUser(payload: CreateUserDto): Promise<void> {
    const userData = await this.prisma.user.findFirst({
      where: { login: payload.login },
    });

    if (userData) {
      throw new UserExistException();
    }
    await this.prisma.user.create({
      data: { login: payload.login, password: payload.password },
    });
  }

  public async getUserDetails(userId: string): Promise<UserDetailsEntity> {
    await this.checkIfUserIdExist(userId);

    const data = await this.prisma.user.findUnique({ where: { id: userId } });
    return new UserDetailsEntity(data);
  }

  public async updateUser(payload: UpdateUserConfigDto): Promise<void> {
    await this.checkIfUserIdExist(payload.userId);
    await this.prisma.user.update({
      where: { id: payload.userId },
      data: {
        password: payload.payload.password,
        updatedAt: new Date(),
        isPublished: false,
      },
    });
  }

  public async softRemoveUser(userId: string) {
    await this.checkIfUserIdExist(userId);
    await this.prisma.user.update({
      where: { id: userId },
      data: { isPublished: false, isRemoved: true, updatedAt: new Date() },
    });
  }

  public async checkIfUserIdExist(userId: string) {
    const userData = await this.prisma.user.findUnique({
      where: { id: userId, isRemoved: false },
      select: { id: true },
    });
    if (!userData) {
      throw new UserNotFoundException();
    }
  }

  public async getAllUser(
    userArgPayload: UserSearchArgDto,
  ): Promise<Array<UserEntity>> {
    const query = [];

    if (!isNullish(userArgPayload?.search?.scope)) {
      query.push({
        scopes: {
          some: {
            scope: { scope: { in: userArgPayload?.search?.scope } },
          },
        },
      });
    }

    if (!isNullish(userArgPayload?.search?.login)) {
      query.push({ login: { in: userArgPayload?.search?.login } });
    }

    if (!isNullish(userArgPayload?.search?.userId)) {
      query.push({ id: { in: userArgPayload?.search?.userId } });
    }
    const data = await this.prisma.user.findMany({
      take: userArgPayload.pagination.take,
      skip: userArgPayload.pagination.skip,
      where: {
        AND: query,
      },
      select: {
        id: true,
        login: true,
        scopes: { select: { scope: { select: { scope: true, id: true } } } },
      },
    });
    return data.map((value) => {
      return new UserEntity({
        login: value.login,
        id: value.id,
        scope: value.scopes.map((value) => {
          return { scope: value.scope.scope, id: value.scope.id };
        }),
      });
    });
  }
}
