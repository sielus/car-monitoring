import { Injectable } from '@nestjs/common';
import {
  UserScopeRelationData,
  UserScopeRelationPayloadEvent,
} from '@sielus/events-lib';

import { UserScopeRelationNotFoundException } from 'src/exceptions/user-scope-relation-not-found.exception';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserScopeRelationDaoService {
  constructor(private readonly prisma: PrismaService) {}

  public async getUnPublishedCreateUserScopeRelation(): Promise<
    UserScopeRelationPayloadEvent[]
  > {
    const data = await this.prisma.userScopeRelation.findMany({
      where: { isPublished: false, isRemoved: false },
      select: { userId: true, scope: { select: { scope: true } } },
    });

    const events: UserScopeRelationPayloadEvent[] = [];

    data.forEach((record) => {
      events.push({
        createdAt: new Date(),
        data: {
          userId: record.userId,
          scope: record.scope.scope,
        },
      });
    });
    return events;
  }

  public async getUnPublishedRemoveUserScopeRelation(): Promise<
    UserScopeRelationPayloadEvent[]
  > {
    const data = await this.prisma.userScopeRelation.findMany({
      where: { isPublished: false, isRemoved: true },
      select: { userId: true, scope: { select: { scope: true } } },
    });

    const events: UserScopeRelationPayloadEvent[] = [];

    data.forEach((record) => {
      events.push({
        createdAt: new Date(),
        data: {
          userId: record.userId,
          scope: record.scope.scope,
        },
      });
    });
    return events;
  }

  public async updateIsPublishedScopeRelationStatus(
    data: UserScopeRelationData,
    isPublished: boolean,
  ) {
    const recordId = await this.getRecordId(data);
    await this.prisma.userScopeRelation.update({
      where: { id: recordId.id },
      data: { isPublished: isPublished },
    });
  }

  private async getRecordId(data: UserScopeRelationData) {
    const record = await this.prisma.userScopeRelation.findFirst({
      where: {
        userId: data.userId,
        scope: { scope: data.scope },
      },
      select: { id: true },
    });
    if (!record) {
      throw new UserScopeRelationNotFoundException();
    }
    return record;
  }
}
