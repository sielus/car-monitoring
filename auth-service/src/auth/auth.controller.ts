import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LogInUserDto } from 'src/auth/dto/log-in-user.dto';
import { AuthEntity } from 'src/auth/entities/auth.entity';
import { UserNotFoundException } from 'src/exceptions/user-not-found.exception';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @ApiResponse({
    status: 200,
    type: AuthEntity,
  })
  @ApiBody({ type: LogInUserDto })
  public async logIn(@Body() data: LogInUserDto) {
    try {
      return this.authService.logIn(data);
    } catch (exception) {
      if (exception instanceof UserNotFoundException) {
        throw new UnauthorizedException();
      }
      throw exception;
    }
  }
}
