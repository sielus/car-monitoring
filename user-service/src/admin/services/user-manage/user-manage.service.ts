import { Injectable } from '@nestjs/common';
import { UserManageDaoService } from 'src/admin/services/user-manage/dao/user-manage.dao/user-manage.dao.service';

@Injectable()
export class UserManageService {
  constructor(private readonly adminManageDaoService: UserManageDaoService) {}

  public async getAllUser() {
    await this.adminManageDaoService.getAllUser();
  }

  public async getUserDetails() {
    await this.adminManageDaoService.getUserDetails();
  }
}
