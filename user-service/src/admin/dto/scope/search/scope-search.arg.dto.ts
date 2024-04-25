import { Field, InputType } from '@nestjs/graphql';
import { GraphqlArgAbstractDto } from 'src/admin/dto/graphql-arg-abstract.dto';
import { ScopeFilterArgDto } from 'src/admin/dto/scope/search/scope-filter.arg.dto';

@InputType()
export class ScopeSearchArgDto extends GraphqlArgAbstractDto {
  @Field(() => ScopeFilterArgDto, { nullable: true })
  search?: ScopeFilterArgDto;
}
