import { QuizService } from '../service/quiz.service';
import { CreateQuizDto } from '../dto/create-quiz.dto';
export declare class QuizResolver {
    private quizService;
    constructor(quizService: QuizService);
    createQuiz(createQuizDto: CreateQuizDto): Promise<import("../entities/quiz.entity").Quiz>;
    getQuiz(): Promise<import("../entities/quiz.entity").Quiz[]>;
}
