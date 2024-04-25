import { Field, ObjectType } from '@nestjs/graphql';

type ScopePayload = {
  id: string;
  scope: string;
};

@ObjectType()
export class ScopeEntity {
  constructor(payload: ScopePayload) {
    this.id = payload.id;
    this.scope = payload.scope;
  }

  @Field(() => String)
  id?: string;

  @Field(() => String, { nullable: false })
  scope?: string;
}
