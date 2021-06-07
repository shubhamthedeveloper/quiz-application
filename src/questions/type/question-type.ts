import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType('Question')
export class QuesType {
  @Field((type) => Int)
  id: number;

  @Field()
  ques_text: string;

  @Field()
  is_active: boolean;

  @Field()
  quiz_id: number;

  @Field()
  created_by: number;
}
