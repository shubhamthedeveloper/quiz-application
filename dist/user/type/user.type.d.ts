import { Role } from '../entities/user-role.enum';
export declare class UserType {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    username: string;
    password: string;
    is_active: boolean;
    role: Role;
}
