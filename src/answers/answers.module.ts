import { Module } from '@nestjs/common';
import { AnswersResolver } from './answers.resolver';
import { AnswersService } from './answers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './entities/answers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Answer])],
  providers: [AnswersResolver, AnswersService],
})
export class AnswersModule {}
