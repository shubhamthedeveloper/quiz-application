import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { Repository } from 'typeorm';
export declare class QuizService {
    private readonly quizRepository;
    constructor(quizRepository: Repository<Quiz>);
    createQuiz(createQuizDto: CreateQuizDto): Promise<Quiz>;
    getQuiz(): Promise<Quiz[]>;
    getQuizByName(name: string): Promise<Quiz>;
}
