import { Args, ObjectType, ResolveField, Resolver } from '@nestjs/graphql';
import { UserArgDto } from 'src/admin/dto/user.arg.dto';
import { UserEntity } from 'src/admin/entities/user.entity';

@ObjectType()
export class UserManageQueries {}

@Resolver(() => UserManageQueries)
export class UserManageQueriesResolver {
  @ResolveField(() => [UserEntity])
  public async users(@Args('input') userArgDto: UserArgDto) {}
}
