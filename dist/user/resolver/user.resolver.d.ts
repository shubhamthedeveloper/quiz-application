import { UserType } from '../type/user.type';
import { UserDto } from '../dto/create-user.dto';
import { SigninDto } from '../dto/sign-in.dto';
import { UserService } from '../service/user.service';
import { TokenType } from '../type/token.type';
import { User } from '../entities/user.entities';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    SignUp(userDto: UserDto): Promise<UserType>;
    SignIn(signinDto: SigninDto): Promise<TokenType>;
    updateUser(id: number, status: boolean, user: User): Promise<UserType>;
}
