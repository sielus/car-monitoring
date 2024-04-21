import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard, Scope } from 'src/guard/auth.guard';
import { CreateUserDto } from 'src/user-manage/dto/create-user.dto';
import { UpdateUserConfigDto } from 'src/user-manage/dto/update-user.config.dto';
import { UpdateUserDto } from 'src/user-manage/dto/update-user.dto';
import { UserManageService } from 'src/user-manage/user-manage.service';

@ApiBearerAuth('jwt')
@Controller('user-manage')
export class UserManageController {
  constructor(private readonly userManageService: UserManageService) {}

  @Post()
  createUser(@Body() createUserManageDto: CreateUserDto) {
    return this.userManageService.createUser(createUserManageDto);
  }

  @UseGuards(AuthGuard)
  @Scope('user')
  @Get()
  getUser(@Req() request: Request) {
    return this.userManageService.getUserDetails(request['user']['id']);
  }

  @UseGuards(AuthGuard)
  @Scope('user')
  @Patch()
  updateUser(@Req() request: Request, @Body() payload: UpdateUserDto) {
    return this.userManageService.updateUser(
      new UpdateUserConfigDto(request['user']['id'], payload),
    );
  }
  @UseGuards(AuthGuard)
  @Scope('user')
  @Delete()
  removeUser(@Req() request: Request) {
    return this.userManageService.removeUser(request['user']['id']);
  }
}
