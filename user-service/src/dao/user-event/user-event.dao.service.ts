import { Injectable } from '@nestjs/common';
import {
  UserRemovePayloadEventDto,
  UserUpsertPayloadEventDto,
} from '@sielus/events-lib';

import { UserNotFoundException } from 'src/exceptions/user-not-found.exception';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserEventDaoService {
  constructor(private readonly prisma: PrismaService) {}

  public async getUnPublishedUpsertUsers(): Promise<
    UserUpsertPayloadEventDto[]
  > {
    const events: UserUpsertPayloadEventDto[] = [];
    const data = await this.prisma.user.findMany({
      where: { isPublished: false, isRemoved: false },
      select: {
        id: true,
        login: true,
        password: true,
      },
    });

    data.forEach((record) => {
      events.push({
        createdAt: new Date(),
        data: {
          login: record.login,
          password: record.password,
          userId: record.id,
        },
      });
    });

    return events;
  }

  public async updateIsPublishedStatus(userId: string, isPublished: boolean) {
    await this.isRecordExist(userId);
    await this.prisma.user.update({
      where: { id: userId },
      data: { isPublished: isPublished },
    });
  }

  private async isRecordExist(userId: string) {
    const data = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!data) {
      throw new UserNotFoundException();
    }
  }

  public async getUnPublishedRemoveUsers(): Promise<
    UserRemovePayloadEventDto[]
  > {
    const events: UserRemovePayloadEventDto[] = [];
    const data = await this.prisma.user.findMany({
      where: { isPublished: false, isRemoved: true },
      select: {
        id: true,
      },
    });

    data.forEach((record) => {
      events.push({
        createdAt: new Date(),
        data: {
          userId: record.id,
        },
      });
    });

    return events;
  }
}
