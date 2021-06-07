import { UserType } from './type/user.type';
import { UserDto } from './dto/create-user.dto';
import { User } from './entities/user.entities';
import { SigninDto } from './dto/sign-in.dto';
import { TokenType } from './type/token.type';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    createUser(userDto: UserDto): Promise<UserType>;
    userSignIn(signinDto: SigninDto): Promise<TokenType>;
    getUserById(id: number): Promise<User>;
    updateStatus(id: number, status: boolean): Promise<UserType>;
    validateUserPassword(signinDto: SigninDto): Promise<string>;
}
