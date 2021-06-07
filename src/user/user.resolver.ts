import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserType } from './type/user.type';
import { UserDto } from './dto/create-user.dto';
import { SigninDto } from './dto/sign-in.dto';
import { UserService } from './user.service';
import { TokenType } from './type/token.type';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../common/auth-guard';
import { GetUser } from './get-user.decorator';
import { User } from './entities/user.entities';
import { RolesGuard } from 'src/common/role.guard';
import { Role } from './entities/user-role.enum';
// import { RolesGuard } from 'src/common/role.guard';
import { Roles } from '../common/roles.decorator';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  // user sign up
  @Mutation(() => UserType)
  SignUp(@Args('userDto') userDto: UserDto) {
    return this.userService.createUser(userDto);
  }

  // User SignIn
  @Mutation(() => TokenType)
  SignIn(@Args('signinDto') signinDto: SigninDto) {
    return this.userService.userSignIn(signinDto);
  }

  // update user status
  @UseGuards(GqlAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Mutation(() => UserType)
  updateUser(
    @Args('id') id: number,
    @Args('status') status: boolean,
    @GetUser() user: User,
  ) {
    return this.userService.updateStatus(id, status);
  }
}
