import { BaseEntity } from '../../common/BaseEntity';
import { Option } from '../../options/entities/option.entity';
export declare class Answer extends BaseEntity {
    part_id: number;
    ques_id: number;
    opt_id: number;
    is_correct: boolean;
    option: Option;
}
