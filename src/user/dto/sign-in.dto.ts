import { IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SigninDto {
  @Field()
  @IsString()
  username: string;

  @Field()
  @IsString()
  password: string;
}
