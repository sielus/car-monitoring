import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard, Scope } from 'src/guard/auth.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UpdateUserConfigDto } from 'src/user/dto/update-user.config.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { UserService } from 'src/user/services/user.service';
import { UserDetailsEntity } from '../entities/user-details.entity';

@ApiBearerAuth('jwt')
@Controller('user')
export class UserController {
  constructor(private readonly userManageService: UserService) {}

  @Post()
  public async createUser(@Body() createUserManageDto: CreateUserDto) {
    await this.userManageService.createUser(createUserManageDto);
  }

  @UseGuards(AuthGuard)
  @Scope('user')
  @Get()
  public async getUser(@Req() request: Request): Promise<UserDetailsEntity> {
    return this.userManageService.getUserDetails(request['user']['id']);
  }

  @UseGuards(AuthGuard)
  @Scope('user')
  @Patch()
  public async updateUser(
    @Req() request: Request,
    @Body() payload: UpdateUserDto,
  ) {
    await this.userManageService.updateUser(
      new UpdateUserConfigDto(request['user']['id'], payload),
    );
  }

  @UseGuards(AuthGuard)
  @Scope('user')
  @Delete()
  public async removeUser(@Req() request: Request) {
    await this.userManageService.removeUser(request['user']['id']);
  }
}
