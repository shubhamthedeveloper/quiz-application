import { Repository } from 'typeorm';
import { Answer } from '../entities/answers.entity';
import { CreateAnsDto } from '../dto/answers.dto';
export declare class AnswerRepository extends Repository<Answer> {
    createAns(createAnsDto: CreateAnsDto): Promise<Answer>;
}
