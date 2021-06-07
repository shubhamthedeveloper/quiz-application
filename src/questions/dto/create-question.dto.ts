import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateQuesDto {
  @Field()
  @IsNotEmpty()
  ques_text: string;

  @Field()
  @IsNotEmpty()
  quiz_id: number;

  // @Field()
  // @IsNotEmpty()
  // created_by: number;
}
