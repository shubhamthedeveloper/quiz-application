import { AnswersService } from '../service/answers.service';
import { CreateAnsDto } from '../dto/answers.dto';
export declare class AnswersResolver {
    private ansService;
    constructor(ansService: AnswersService);
    submitAns(createAnsDto: CreateAnsDto): Promise<import("../entities/answers.entity").Answer>;
    getAns(): Promise<import("../entities/answers.entity").Answer[]>;
    getUserAns(id: number): Promise<import("../entities/answers.entity").Answer>;
}
