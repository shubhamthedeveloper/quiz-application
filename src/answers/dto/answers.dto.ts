import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAnsDto {
  @Field()
  @IsNotEmpty()
  ques_id: number;

  @Field()
  @IsNotEmpty()
  opt_id: number;

  @Field()
  @IsNotEmpty()
  part_id: number;

  @Field({ defaultValue: false })
  is_correct: boolean;
}
