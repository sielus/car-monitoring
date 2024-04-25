import { Injectable } from '@nestjs/common';
import { UserSearchArgDto } from 'src/admin/dto/user/search/user-search.arg.dto';
import { UserEntity } from 'src/admin/entities/user.entity';
import { UserManageDaoService } from 'src/admin/services/user-manage/dao/user-manage.dao/user-manage.dao.service';

@Injectable()
export class UserManageService {
  constructor(private readonly adminManageDaoService: UserManageDaoService) {}

  public async getAllUser(
    userArgPayload: UserSearchArgDto,
  ): Promise<Array<UserEntity>> {
    return this.adminManageDaoService.getAllUser(userArgPayload);
  }
}
