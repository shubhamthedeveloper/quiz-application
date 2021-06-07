import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuesResolver } from './question.resolver';
import { QuesService } from './ques.service';
import { Question } from './entities/question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [QuesResolver, QuesService],
})
export class QuestionsModule {}
