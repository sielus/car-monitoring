import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ScopeIdArgDto {
  @Field(() => String, { nullable: false })
  scopeId: string;
}
