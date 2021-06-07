import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePartDto {
  @Field()
  @IsNotEmpty()
  quiz_id: number;
}
