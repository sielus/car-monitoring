import { UpdateUserDto } from 'src/user/dto/update-user.dto';

export class UpdateUserConfigDto {
  constructor(userId: string, payload: UpdateUserDto) {
    this.payload = payload;
    this.userId = userId;
  }

  payload: UpdateUserDto;
  userId: string;
}
