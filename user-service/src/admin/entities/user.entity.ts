import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserEntity {
  @Field(() => String)
  id?: string;

  @Field(() => String, { nullable: false })
  login?: string;
}
