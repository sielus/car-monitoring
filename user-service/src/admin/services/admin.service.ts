import { Injectable } from '@nestjs/common';
import { ScopeManageService } from 'src/admin/services/scope-manage/scope-manage.service';
import { UserManageService } from 'src/admin/services/user-manage/user-manage.service';

@Injectable()
export class AdminService {
  constructor(
    private readonly scopeManageService: ScopeManageService,
    private readonly userManageService: UserManageService,
  ) {}

  public async getAllUser() {
    await this.userManageService.getAllUser();
  }

  public async getUserDetails() {
    await this.userManageService.getUserDetails();
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
