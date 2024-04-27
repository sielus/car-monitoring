import { Field, ObjectType } from '@nestjs/graphql';
import { ScopeEntity } from 'src/admin/entities/scope.entity';

type UserPayload = {
  login: string;
  id: string;
  scope: ScopeEntity[];
};

@ObjectType()
export class UserEntity {
  constructor(payload: UserPayload) {
    this.id = payload.id;
    this.login = payload.login;
    this.scope = payload.scope;
  }

  @Field(() => String)
  id?: string;

  @Field(() => String, { nullable: false })
  login?: string;

  @Field(() => [ScopeEntity], { nullable: false })
  scope?: ScopeEntity[];
}
