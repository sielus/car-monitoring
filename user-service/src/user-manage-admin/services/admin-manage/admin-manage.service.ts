import { Injectable } from '@nestjs/common';
import { AdminManageDaoService } from 'src/user-manage-admin/services/admin-manage/dao/admin-manage.dao/admin-manage.dao.service';

@Injectable()
export class AdminManageService {
  constructor(private readonly adminManageDaoService: AdminManageDaoService) {}

  public async getAllUser() {
    await this.adminManageDaoService.getAllUser();
  }

  public async getUserDetails() {
    await this.adminManageDaoService.getUserDetails();
  }
}
