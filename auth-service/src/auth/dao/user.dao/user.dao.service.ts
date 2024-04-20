import { Injectable } from '@nestjs/common';
import { LogInUserDto } from 'src/auth/dto/log-in-user.dto';
import { UserDetailsDto } from 'src/auth/dto/user-details.dto';
import { UserNotFoundException } from 'src/exceptions/user-not-found.exception';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserDaoService {
  constructor(private readonly prisma: PrismaService) {}

  public async getUserDetails(logInData: LogInUserDto) {
    const data = await this.prisma.user.findFirst({
      where: { login: logInData.login, password: logInData.password },
      select: {
        userId: true,
        login: true,
        scopes: { select: { scope: { select: { scope: true } } } },
      },
    });

    if (!data) {
      throw new UserNotFoundException();
    }
    return new UserDetailsDto(
      data.userId,
      data.login,
      data.scopes.map((value) => {
        return value.scope.scope;
      }),
    );
  }
}
