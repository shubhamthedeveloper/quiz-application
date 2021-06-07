import { BaseEntity } from '../../common/BaseEntity';
import { Question } from '../../questions/entities/question.entity';
export declare class Option extends BaseEntity {
    opt_text: string;
    is_active: boolean;
    is_correct: boolean;
    ques_id: number;
    ques: Question;
}
