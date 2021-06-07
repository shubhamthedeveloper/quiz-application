import { User } from '../../user/entities/user.entities';
import { BaseEntity } from '../../common/BaseEntity';
import { Quiz } from '../../quiz/entities/quiz.entity';
export declare class Participant extends BaseEntity {
    quiz_id: number;
    user_id: number;
    users: User;
    quizes: Quiz;
}
