import { Injectable } from '@nestjs/common';
import { UserSearchArgDto } from 'src/admin/dto/user/search/user-search.arg.dto';
import { UserEntity } from 'src/admin/entities/user.entity';
import { UserDaoService } from 'src/dao/user/user.dao.service';

@Injectable()
export class UserManageService {
  constructor(private readonly adminManageDaoService: UserDaoService) {}

  public async getAllUser(
    userArgPayload: UserSearchArgDto,
  ): Promise<Array<UserEntity>> {
    return this.adminManageDaoService.getAllUser(userArgPayload);
  }
}
