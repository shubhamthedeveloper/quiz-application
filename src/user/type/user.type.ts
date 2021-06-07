import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Role } from '../entities/user-role.enum';

@ObjectType('User')
export class UserType {
  @Field((type) => Int)
  id: number;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  phone: string;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  is_active: boolean;

  @Field()
  role: Role;
}
