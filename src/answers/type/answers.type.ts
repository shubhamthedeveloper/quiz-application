import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType('Answer')
export class AnswerType {
  @Field((type) => Int)
  id: number;

  @Field()
  ques_id: number;

  @Field()
  opt_id: number;

  @Field()
  part_id: number;

  @Field()
  is_correct: boolean;
}
