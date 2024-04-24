import { Injectable } from '@nestjs/common';
import { UserArgDto } from 'src/admin/dto/user/user.arg.dto';
import { UserEntity } from 'src/admin/entities/user.entity';
import { UserManageDaoService } from 'src/admin/services/user-manage/dao/user-manage.dao/user-manage.dao.service';

@Injectable()
export class UserManageService {
  constructor(private readonly adminManageDaoService: UserManageDaoService) {}

  public async getAllUser(
    userArgPayload: UserArgDto,
  ): Promise<Array<UserEntity>> {
    return this.adminManageDaoService.getAllUser(userArgPayload);
  }
}
