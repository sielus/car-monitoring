import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AppService } from 'src/app.service';
import { AuthGuard, Scope } from 'src/guard/auth.guard';

@ApiBearerAuth('jwt')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard)
  @Scope('user')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
