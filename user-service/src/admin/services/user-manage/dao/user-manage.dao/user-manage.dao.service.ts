import { Injectable } from '@nestjs/common';
import { UserSearchArgDto } from 'src/admin/dto/user/search/user-search.arg.dto';
import { UserEntity } from 'src/admin/entities/user.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserManageDaoService {
  constructor(private readonly prisma: PrismaService) {}

  //TODO prepare selector for creating dynamic select based on selected fields in gql entity
  public async getAllUser(
    userArgPayload: UserSearchArgDto,
  ): Promise<Array<UserEntity>> {
    const data = await this.prisma.user.findMany({
      take: userArgPayload.pagination.take,
      skip: userArgPayload.pagination.skip,
      where: {
        AND: [
          { login: { in: userArgPayload?.search?.login } },
          { id: { in: userArgPayload?.search?.userId } },
          {
            scopes: {
              some: { scope: { scope: { in: userArgPayload?.search?.scope } } },
            },
          },
        ],
      },
      select: {
        id: true,
        login: true,
        scopes: { select: { scope: { select: { scope: true } } } },
      },
    });
    return data.map((value) => {
      return new UserEntity({
        login: value.login,
        userId: value.id,
        scope: value.scopes.map((value) => {
          return value.scope.scope;
        }),
      });
    });
  }
}
