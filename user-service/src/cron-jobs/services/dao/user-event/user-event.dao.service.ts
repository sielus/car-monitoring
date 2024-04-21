import { Injectable } from '@nestjs/common';
import { UserRemovePayloadEvent } from 'src/cron-jobs/services/events/dto/user-remove-payload.event';
import { UserScopeRelationPayloadEvent } from 'src/cron-jobs/services/events/dto/user-scope-relation-payload.event';
import { UserUpsertPayloadEvent } from 'src/cron-jobs/services/events/dto/user-upsert-payload.event';
import { UserNotFoundException } from 'src/exceptions/user-not-found.exception';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserEventDaoService {
  constructor(private readonly prisma: PrismaService) {}

  public async getUnPublishedUpsertUsers() {
    const data = await this.prisma.user.findMany({
      where: { isPublished: false, isRemoved: false },
      select: {
        id: true,
        login: true,
        password: true,
      },
    });
    return data.map((record) => {
      return new UserUpsertPayloadEvent({
        login: record.login,
        password: record.password,
        userId: record.id,
      });
    });
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

  public async getUnPublishedRemoveUsers(): Promise<UserRemovePayloadEvent[]> {
    const data = await this.prisma.user.findMany({
      where: { isPublished: false, isRemoved: true },
      select: {
        id: true,
      },
    });
    return data.map((record) => {
      return new UserRemovePayloadEvent({
        userId: record.id,
      });
    });
  }
}
