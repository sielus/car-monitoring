import { Field, ObjectType } from '@nestjs/graphql';

type UserPayload = {
  login: string;
  userId: string;
  scope: string[];
};

@ObjectType()
export class UserEntity {
  constructor(payload: UserPayload) {
    this.id = payload.userId;
    this.login = payload.login;
    this.scope = payload.scope;
  }

  @Field(() => String)
  id?: string;

  @Field(() => String, { nullable: false })
  login?: string;

  @Field(() => [String], { nullable: false })
  scope?: string[];
}
