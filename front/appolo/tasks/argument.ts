import { Field, ArgsType, Int } from "type-graphql";
import { Min, Max } from "class-validator";

@ArgsType()
export class SampleArgs {
  @Field(() => Int)
  @Min(0)
  skip: number = 0;

  @Field(() => Int)
  @Min(1)
  @Max(50)
  take: number = 25;
}
