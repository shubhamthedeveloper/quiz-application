import { CreateQuizDto } from './dto/create-quiz.dto';
import { Quiz } from './entities/quiz.entity';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entities';
export declare class QuizService {
    private readonly quizRepository;
    constructor(quizRepository: Repository<Quiz>);
    createQuiz(createQuizDto: CreateQuizDto, user: User): Promise<Quiz>;
    getQuiz(): Promise<Quiz[]>;
    getQuizByName(title: string): Promise<Quiz>;
}
