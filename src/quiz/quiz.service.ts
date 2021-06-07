import {
  Injectable,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { Quiz } from './entities/quiz.entity';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entities';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {}

  // create new quiz if not present
  async createQuiz(createQuizDto: CreateQuizDto, user: User): Promise<Quiz> {
    const quiz_present = await this.getQuizByName(createQuizDto.title);

    if (quiz_present) {
      throw new ConflictException('quiz already present');
    }
    return this.quizRepository.save({
      ...createQuizDto,
      created_by: user.id,
    });
  }

  // get list of all quizes
  getQuiz(): Promise<Quiz[]> {
    return this.quizRepository.find();
  }

  // search quiz by name
  async getQuizByName(title: string): Promise<Quiz> {
    return this.quizRepository.findOne({ where: { title } });
  }
}
