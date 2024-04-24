import { Injectable } from '@nestjs/common';
import { UserLoginExistException } from 'src/exceptions/user-login-exist.exception';
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
      throw new UserLoginExistException();
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

  private async checkIfUserIdExist(userId: string) {
    const userData = await this.prisma.user.findUnique({
      where: { id: userId, isRemoved: false },
      select: { id: true },
    });
    if (!userData) {
      throw new UserNotFoundException();
    }
  }
}
