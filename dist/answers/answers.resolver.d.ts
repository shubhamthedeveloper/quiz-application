import { AnswersService } from './answers.service';
import { CreateAnsDto } from './dto/answers.dto';
export declare class AnswersResolver {
    private ansService;
    constructor(ansService: AnswersService);
    submitAns(createAnsDto: CreateAnsDto): Promise<import("./entities/answers.entity").Answer>;
    getAns(id: number): Promise<import("./entities/answers.entity").Answer[]>;
}
