import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDaoService } from 'src/auth/dao/user.dao/user.dao.service';
import { LogInUserDto } from 'src/auth/dto/log-in-user.dto';
import { UserDetailsDto } from 'src/auth/dto/user-details.dto';
import { AuthEntity } from 'src/auth/entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userDaoService: UserDaoService,
    private readonly jwtService: JwtService,
  ) {}

  public async logIn(logInData: LogInUserDto) {
    const data = await this.userDaoService.getUserDetails(logInData);
    return await this.getToken(data);
  }

  public async verifyToken(authEntity: AuthEntity) {
    return this.jwtService.verifyAsync(authEntity.token);
  }

  private async getToken(userDetails: UserDetailsDto): Promise<AuthEntity> {
    return this.jwtService
      .signAsync({
        id: userDetails.userId,
        login: userDetails.login,
        scope: userDetails.scope,
      })
      .then(async (value) => {
        return new AuthEntity(value);
      });
  }
}
