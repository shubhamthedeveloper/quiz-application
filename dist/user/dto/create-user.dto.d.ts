import { Role } from '../entities/user-role.enum';
export declare class UserDto {
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    username: string;
    password: string;
    role: Role;
}
