import { Field, InputType } from '@nestjs/graphql';

//TODO add validation

@InputType()
export class ScopeFilterArgDto {
  @Field(() => String, { nullable: true })
  scope?: string;
}
