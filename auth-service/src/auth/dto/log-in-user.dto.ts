import { ApiProperty } from '@nestjs/swagger';

export class LogInUserDto {
  @ApiProperty()
  login: string;

  @ApiProperty()
  password: string;
}
