import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateOptionDto {
  @Field()
  @IsNotEmpty()
  opt_text: string;

  @Field()
  @IsNotEmpty()
  ques_id: number;

  @Field({ defaultValue: false })
  is_correct: boolean;
}
