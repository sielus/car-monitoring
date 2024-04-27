import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserScopeRelationArgDto {
  @Field(() => String, { nullable: false })
  scopeId: string;

  @Field(() => String, { nullable: false })
  userId: string;
}
