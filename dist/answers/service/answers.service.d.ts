import { Answer } from '../entities/answers.entity';
import { CreateAnsDto } from '../dto/answers.dto';
import { Repository } from 'typeorm';
export declare class AnswersService {
    private ansRepository;
    constructor(ansRepository: Repository<Answer>);
    submitAns(createAnsDto: CreateAnsDto): Promise<Answer>;
    getAns(): Promise<Answer[]>;
    getUserAns(id: number): Promise<Answer>;
}
