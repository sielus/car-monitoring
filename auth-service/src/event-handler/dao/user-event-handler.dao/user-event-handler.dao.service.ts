import { Injectable } from '@nestjs/common';
import { UserRemovePayloadEvent } from 'src/event-handler/dto/user-remove-payload.event';
import { UserUpsertPayloadEvent } from 'src/event-handler/dto/user-upsert-payload.event';
import { UserNotFoundException } from 'src/exceptions/user-not-found.exception';
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
  }

  public async removeUser(eventData: UserRemovePayloadEvent) {
    const data = await this.prisma.user.findFirst({
      where: { userId: eventData.data.userId },
    });
    if (!data) {
      throw new UserNotFoundException();
    }
    await this.prisma.user.delete({ where: { id: data.id } });
  }

  public async removeUser(eventData: UserRemovePayloadEvent) {
    const data = await this.prisma.user.findFirst({
      where: { userId: eventData.data.userId },
    });
    if (!data) {
      throw new UserNotFoundException();
    }
    await this.prisma.user.delete({ where: { id: data.id } });
  }
}
