import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('Token')
export class TokenType {
  @Field()
  token: string;
}
