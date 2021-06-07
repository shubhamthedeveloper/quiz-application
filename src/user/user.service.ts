import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserType } from './type/user.type';
import { UserDto } from './dto/create-user.dto';
import { ErrorCode } from '../common/exceptions';
import { User } from './entities/user.entities';
import { SigninDto } from './dto/sign-in.dto';
import { TokenType } from './type/token.type';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './Jwt/jwt-payload.interface';
import { Role } from './entities/user-role.enum';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  // Create New User
  async createUser(userDto: UserDto): Promise<UserType> {
    if (
      await this.userRepository.findOne({
        where: { username: userDto.username },
      })
    ) {
      throw new BadRequestException(
        'Username Already Exists',
        ErrorCode.SAME_USERNAME,
      );
    }

    if (
      await this.userRepository.findOne({
        where: { phone: userDto.phone },
      })
    ) {
      throw new BadRequestException(
        'Phone number already exists',
        ErrorCode.SAME_PHONE,
      );
    }

    if (
      await this.userRepository.findOne({
        where: { email: userDto.email },
      })
    ) {
      throw new BadRequestException(
        'Email already exists',
        ErrorCode.SAME_EMAIL,
      );
    }

    return this.userRepository.save({
      ...userDto,
      password: await bcrypt.hash(userDto.password, 12),
    });
  }

  // Sign in
  async userSignIn(signinDto: SigninDto): Promise<TokenType> {
    const username = await this.validateUserPassword(signinDto);
    if (!username) {
      throw new UnauthorizedException(
        'Invalid login Credentials',
        ErrorCode.INVALID_CREDENTIALS,
      );
    }
    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.sign(payload);
    const token = new TokenType();
    token.token = accessToken;
    return token;
  }

  // search user by Id
  async getUserById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  // update the active status
  async updateStatus(
    id: number,
    status: boolean,
  ): Promise<UserType> {
    const userData = await this.getUserById(id);
    if (!userData) {
      throw new NotFoundException('User Not Found', ErrorCode.NOT_PRESENT);
    }
    userData.is_active = status;
    return this.userRepository.save(userData);
  }

  // validate the password for signin
  async validateUserPassword(signinDto: SigninDto): Promise<string> {
    const user = await this.userRepository.findOne({
      where: { username: signinDto.username },
    });

    if (user.is_active == false) {
      throw new UnauthorizedException(
        'User is Inactive',
        ErrorCode.ACCESS_DENIED,
      );
    }

    if (user && (await user.validatePassword(signinDto.password))) {
      return user.username;
    }
    throw new UnauthorizedException(
      'Invalid login credentials',
      ErrorCode.INVALID_CREDENTIALS,
    );
  }
}
