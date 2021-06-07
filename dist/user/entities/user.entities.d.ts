import { Role } from './user-role.enum';
import { Participant } from '../../participants/enitities/participants.entity';
import { BaseEntity } from '../../common/BaseEntity';
import { Question } from '../../questions/entities/question.entity';
import { Quiz } from '../../quiz/entities/quiz.entity';
export declare class User extends BaseEntity {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    emailToLowerCase(): void;
    username: string;
    password: string;
    is_active: boolean;
    role: Role;
    participants: Participant;
    questions: Question[];
    quiz: Quiz[];
    validatePassword(password: string): Promise<boolean>;
}
