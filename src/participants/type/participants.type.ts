import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType('Participants')
export class PartType {
  @Field(() => Int)
  id: number;

  @Field()
  quiz_id: number;

  @Field()
  user_id: number;
}
