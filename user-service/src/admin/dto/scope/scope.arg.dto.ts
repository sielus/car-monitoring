import { Field, InputType } from '@nestjs/graphql';
import { GraphqlArgAbstractDto } from 'src/admin/dto/graphql-arg-abstract.dto';
import { ScopeFilterArgDto } from 'src/admin/dto/scope/scope-filter.arg.dto';

@InputType()
export class ScopeArgDto extends GraphqlArgAbstractDto {
  @Field(() => ScopeFilterArgDto, { nullable: true })
  search?: ScopeFilterArgDto;
}
