import { Module } from '@nestjs/common';
import { QuizResolver } from './quiz.resolver';
import { QuizService } from './quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz])],
  providers: [QuizResolver, QuizService],
})
export class QuizModule {}
