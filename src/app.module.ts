import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { GraphQlOption } from './common/graphql.option';
import { UserModule } from './user/user.module';
import { QuizModule } from './quiz/quiz.module';
import { QuestionsModule } from './questions/questions.module';
import { OptionsModule } from './options/options.module';
import { ParticipantsModule } from './participants/participants.module';
import { AnswersModule } from './answers/answers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRootAsync({
      useClass: GraphQlOption,
    }),
    UserModule,
    QuizModule,
    QuestionsModule,
    OptionsModule,
    ParticipantsModule,
    AnswersModule,
  ],
})
export class AppModule {}
