import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserManageAdminService } from 'src/user-manage-admin/services/user-manage-admin.service';

@Controller('user-manage-admin')
export class UserManageAdminController {
  constructor(
    private readonly userManageAdminService: UserManageAdminService,
  ) {}
}
