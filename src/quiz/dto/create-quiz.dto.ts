import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateQuizDto {
  @Field()
  @IsNotEmpty()
  title: string;

  // @Field()
  // @IsNotEmpty()
  // created_by: number;
}
