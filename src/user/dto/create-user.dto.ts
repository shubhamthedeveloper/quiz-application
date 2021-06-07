import { IsString, IsEmail, IsNotEmpty, IsEnum } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { Role } from '../entities/user-role.enum';

@InputType()
export class UserDto {
  @Field()
  @IsString()
  first_name: string;

  @Field()
  @IsString()
  last_name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  phone: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  username: string;

  @Field()
  @IsString()
  password: string;

  @Field((type) => Role)
  @IsEnum(Role)
  role: Role;
}
