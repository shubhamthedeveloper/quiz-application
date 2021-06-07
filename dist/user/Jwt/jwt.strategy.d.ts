import { JwtPayload } from '../Jwt/jwt-payload.interface';
import { User } from '../entities/user.entities';
import { Repository } from 'typeorm';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
