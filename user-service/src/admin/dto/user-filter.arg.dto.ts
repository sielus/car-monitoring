import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserFilterArgDto {
  @Field(() => [String], { nullable: true })
  userId?: string[];

  @Field(() => [String], { nullable: true })
  login?: string[];
}
