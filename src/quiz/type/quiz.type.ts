import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType('Quiz')
export class QuizType {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  created_by: number;
}
