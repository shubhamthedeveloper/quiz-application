import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { User } from '../user/entities/user.entities';
export declare class QuizResolver {
    private quizService;
    constructor(quizService: QuizService);
    createQuiz(createQuizDto: CreateQuizDto, user: User): Promise<import("./entities/quiz.entity").Quiz>;
    getQuiz(): Promise<import("./entities/quiz.entity").Quiz[]>;
}
