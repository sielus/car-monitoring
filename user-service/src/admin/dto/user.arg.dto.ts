import { Field, InputType } from '@nestjs/graphql';
import { GraphqlArgAbstractDto } from './graphql-arg-abstract.dto';
import { UserFilterArgDto } from './user-filter.arg.dto';

@InputType()
export class UserArgDto extends GraphqlArgAbstractDto {
  @Field(() => UserFilterArgDto, { nullable: true })
  search?: UserFilterArgDto;
}
