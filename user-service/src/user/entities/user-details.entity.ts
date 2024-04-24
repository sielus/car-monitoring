import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UserDetailsEntity {
  constructor(data: User) {
    this.login = data.login;
  }

  @ApiProperty()
  login: string;
}
