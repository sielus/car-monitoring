import { Injectable } from '@nestjs/common';
import { UserScopeRelationPayloadEvent } from '@sielus/events-lib';
import { RecordNotFoundException } from 'src/exceptions/record-not-found.exception';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserScopeRelationEventDaoService {
  constructor(private readonly prisma: PrismaService) {}

  public async handleCreateEvent(event: UserScopeRelationPayloadEvent) {
    await this.prisma.userScopeRelation.create({
      data: {
        user: {
          connect: {
            userId: event.data.userId,
          },
        },
        scope: {
          connectOrCreate: {
            where: { scope: event.data.scope },
            create: { scope: event.data.scope },
          },
        },
      },
    });
  }

  public async handleRemoveEvent(event: UserScopeRelationPayloadEvent) {
    const recordId = await this.getRecordId(event);
    await this.prisma.userScopeRelation.delete({
      where: {
        id: recordId.id,
      },
    });
  }

  private async getRecordId(event: UserScopeRelationPayloadEvent) {
    const recordId = await this.prisma.userScopeRelation.findFirst({
      where: {
        scope: { scope: event.data.scope },
        user: { userId: event.data.userId },
      },
      select: { id: true },
    });
    if (!recordId) {
      throw new RecordNotFoundException();
    }
    return recordId;
  }
}
