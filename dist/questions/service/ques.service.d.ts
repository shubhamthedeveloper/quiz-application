import { CreateQuesDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';
import { Repository } from 'typeorm';
import { QuesType } from '../type/question-type';
export declare class QuesService {
    private readonly quesRepository;
    constructor(quesRepository: Repository<Question>);
    createQues(createQuesDto: CreateQuesDto): Promise<Question>;
    getques(id: number): Promise<Question[]>;
    getQuesById(id: number): Promise<Question>;
    updateQuesStatus(id: number, status: boolean): Promise<QuesType>;
}
