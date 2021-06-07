import { BaseEntity } from '../../common/BaseEntity';
import { User } from 'src/user/entities/user.entities';
import { Quiz } from 'src/quiz/entities/quiz.entity';
import { Option } from 'src/options/entities/option.entity';
export declare class Question extends BaseEntity {
    ques_text: string;
    is_active: boolean;
    quiz_id: number;
    created_by: number;
    user: User;
    quiz: Quiz;
    option: Option[];
}
