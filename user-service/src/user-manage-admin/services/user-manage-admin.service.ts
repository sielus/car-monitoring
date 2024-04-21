import { Injectable } from '@nestjs/common';
import { AdminManageService } from 'src/user-manage-admin/services/admin-manage/admin-manage.service';
import { ScopeManageService } from 'src/user-manage-admin/services/scope-manage/scope-manage.service';

@Injectable()
export class UserManageAdminService {
  constructor(
    private readonly scopeManageService: ScopeManageService,
    private readonly adminManageService: AdminManageService,
  ) {}

  public async getAllUser() {
    await this.adminManageService.getAllUser();
  }

  public async getUserDetails() {
    await this.adminManageService.getUserDetails();
  }

  public async getAllScopes() {
    await this.scopeManageService.getAllScopes();
  }

  public async createScope() {
    await this.scopeManageService.createScope();
  }

  public async removeScope() {
    await this.scopeManageService.removeScope();
  }

  public async assignScopeToUser() {
    await this.scopeManageService.assignScopeToUser();
  }

  public async removeScopeFromUser() {
    await this.scopeManageService.removeScopeFromUser();
  }
}
