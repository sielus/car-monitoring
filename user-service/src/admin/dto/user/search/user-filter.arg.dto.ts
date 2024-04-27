import { Field, InputType } from '@nestjs/graphql';

//TODO add validation

@InputType()
export class UserFilterArgDto {
  @Field(() => [String], { nullable: true })
  userId?: string[];

  @Field(() => [String], { nullable: true })
  login?: string[];

  @Field(() => [String], { nullable: true })
  scope?: string[];
}
