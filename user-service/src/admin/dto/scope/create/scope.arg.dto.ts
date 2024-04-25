import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ScopeArgDto {
  @Field(() => String, { nullable: false })
  scope: string;
}
