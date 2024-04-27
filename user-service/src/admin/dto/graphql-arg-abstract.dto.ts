import { Field, InputType, Int } from '@nestjs/graphql';

//TODO add validation
@InputType()
export class PaginationArgDto {
  @Field(() => Int, { defaultValue: 25 })
  take: number = 25;

  @Field(() => Int, { defaultValue: 0 })
  skip: number = 0;
}

@InputType({ isAbstract: true })
export abstract class GraphqlArgAbstractDto {
  @Field(() => PaginationArgDto)
  pagination?: PaginationArgDto = new PaginationArgDto();
}
