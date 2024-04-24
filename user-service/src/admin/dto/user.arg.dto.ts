import { Field, InputType } from '@nestjs/graphql';
import { GraphqlArgAbstractDto } from 'src/admin/dto/graphql-arg-abstract.dto';
import { UserFilterArgDto } from 'src/admin/dto/user-filter.arg.dto';

@InputType()
export class UserArgDto extends GraphqlArgAbstractDto {
  @Field(() => UserFilterArgDto, { nullable: true })
  search?: UserFilterArgDto;
}
