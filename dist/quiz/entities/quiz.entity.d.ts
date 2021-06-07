import { BaseEntity } from '../../common/BaseEntity';
import { Participant } from 'src/participants/enitities/participants.entity';
import { Question } from '../../questions/entities/question.entity';
import { User } from '../../user/entities/user.entities';
export declare class Quiz extends BaseEntity {
    title: string;
    created_by: number;
    user: User;
    participants: Participant[];
    questions: Question[];
}
