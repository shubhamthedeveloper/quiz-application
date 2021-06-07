import { UserType } from '../type/user.type';
import { UserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entities';
import { SigninDto } from '../dto/sign-in.dto';
import { TokenType } from '../type/token.type';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    createUser(userDto: UserDto): Promise<UserType>;
    userSignIn(SigninDto: SigninDto): Promise<TokenType>;
    getUserByName(username: string): Promise<User>;
    getUserById(id: number): Promise<User>;
    updateStatus(id: number, status: boolean, user: User): Promise<UserType>;
    validateUserPassword(signinDto: SigninDto): Promise<string>;
}
