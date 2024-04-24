import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PaginationArgDto {
  @Field(() => Int, { defaultValue: 25 })
  take: number = 25;
}

@InputType({ isAbstract: true })
export abstract class GraphqlArgAbstractDto {
  @Field(() => PaginationArgDto)
  pagination?: PaginationArgDto = new PaginationArgDto();
}
