import { Quiz } from '../entities/quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuizDto } from '../dto/create-quiz.dto';
export declare class QuizRepository extends Repository<Quiz> {
    createQuiz(createQuizDto: CreateQuizDto): Promise<Quiz>;
}
