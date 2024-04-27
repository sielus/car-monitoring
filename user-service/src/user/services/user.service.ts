import { Injectable } from '@nestjs/common';
import { UserDaoService } from 'src/dao/user/user.dao.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserConfigDto } from 'src/user/dto/update-user.config.dto';

@Injectable()
export class UserService {
  constructor(private readonly userManageDao: UserDaoService) {}

  public async getUserDetails(userId: string) {
    return this.userManageDao.getUserDetails(userId);
  }

  public async createUser(payload: CreateUserDto) {
    await this.userManageDao.createUser(payload);
  }

  public async updateUser(payload: UpdateUserConfigDto) {
    await this.userManageDao.updateUser(payload);
  }

  public async removeUser(userId: string) {
    await this.userManageDao.softRemoveUser(userId);
  }
}
