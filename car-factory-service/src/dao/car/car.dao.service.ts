import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarDaoService {
  constructor(private readonly prisma: PrismaService) {}

  public async getUnPublishedCarUpsert() {
    const data = await this.prisma.car.findMany({
      where: { isPublished: false, isRemoved: false },
      select: {
        id: true,
        vin: true,
        year: true,
        engineType: { select: { type: true } },
        bodyType: {
          select: {
            type: true,
          },
        },
      },
    });

    return data.map((record) => {
      return {
        id: record.id,
        vin: record.vin,
        year: record.year,
        engineType: record.engineType.type,
        bodyType: record.bodyType.type,
      };
    });
  }

  public async getUnPublishedCarRemoved() {
    const data = await this.prisma.car.findMany({
      where: { isPublished: false, isRemoved: true },
      select: {
        id: true,
        vin: true,
      },
    });

    return data.map((record) => {
      return {
        id: record.id,
        vin: record.vin,
      };
    });
  }

  public async updateIsPublishedCarUpsert(
    carId: string,
    isPublished: boolean,
  ) {}

  public async updateIsPublishedCarRemove(
    carId: string,
    isPublished: boolean,
  ) {}

  public async softRemoveCar(carId: string) {}
}
