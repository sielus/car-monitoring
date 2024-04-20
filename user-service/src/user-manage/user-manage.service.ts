import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user-manage/dto/create-user.dto';
import { UpdateUserConfigDto } from "src/user-manage/dto/update-user.config.dto";
import { UpdateUserDto } from 'src/user-manage/dto/update-user.dto';
import { UserManageDaoService } from 'src/user-manage/services/dao/user-manage.dao/user-manage.dao.service';

@Injectable()
export class UserManageService {
  constructor(private readonly userManageDao: UserManageDaoService) {}

  public async getUserDetails(userId: string) {
    await this.userManageDao.getUserDetails(userId);
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

  public async assignUserToCar() {}

  public async removeCarFromUser() {}
}
