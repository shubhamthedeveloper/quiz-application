import { QuesType } from './type/question-type';
import { CreateQuesDto } from './dto/create-question.dto';
import { QuesService } from './ques.service';
import { User } from '../user/entities/user.entities';
export declare class QuesResolver {
    private quesService;
    constructor(quesService: QuesService);
    createQues(createQuesDto: CreateQuesDto, user: User): Promise<import("./entities/question.entity").Question>;
    getQues(quiz_id: number): Promise<import("./entities/question.entity").Question[]>;
    updateQues(id: number, status: boolean): Promise<QuesType>;
}
