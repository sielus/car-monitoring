import { Injectable, NotImplementedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserManageDaoService {
  constructor(private readonly prisma: PrismaService) {}

  public async getAllUser() {
    //Return userId, userLogin
    throw new NotImplementedException();
  }

  public async getUserDetails() {
    //Return userScopes, rest of the details like machine-relations etc
    throw new NotImplementedException();
  }
}
