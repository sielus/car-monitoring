import { Injectable } from '@nestjs/common';
import { UserUpsertPayloadEvent } from 'src/event-handler/dto/user-upsert-payload.event';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserEventHandlerDaoService {
  constructor(private readonly prisma: PrismaService) {}

  public async upsertUser(payload: UserUpsertPayloadEvent) {
    await this.prisma.user.upsert({
      create: {
        login: payload.data.login,
        password: payload.data.password,
        userId: payload.data.userId,
        createdAt: payload.createdAt,
      },
      update: {
        login: payload.data.login,
        password: payload.data.password,
        updatedAt: new Date(),
      },
      where: {
        login_userId: {
          userId: payload.data.userId,
          login: payload.data.login,
        },
      },
    });
    for (const record of payload.data.scope) {
      const relation = await this.prisma.userScopeRelation.findFirst({
        where: {
          scope: {
            scope: record,
          },
          user: { userId: payload.data.userId },
        },
      });
      if (!relation) {
        await this.prisma.userScopeRelation.create({
          data: {
            user: {
              connect: {
                login_userId: {
                  login: payload.data.login,
                  userId: payload.data.userId,
                },
              },
            },
            scope: {
              connectOrCreate: {
                where: {
                  scope: record,
                },
                create: { scope: record },
              },
            },
          },
        });
      }
    }
  }
}
