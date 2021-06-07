import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType('Option')
export class OptionType {
  @Field(() => Int)
  id: number;

  @Field()
  opt_text: string;

  @Field()
  is_correct: boolean;

  @Field()
  is_active: boolean;

  @Field()
  ques_id: number;
}
