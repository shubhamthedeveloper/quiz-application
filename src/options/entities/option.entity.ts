import { Entity, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../../common/BaseEntity';
import { Question } from '../../questions/entities/question.entity';
import { Answer } from 'src/answers/entities/answers.entity';

@Entity('options')
export class Option extends BaseEntity {
  @Column()
  opt_text: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ default: false })
  is_correct: boolean;

  @Column()
  ques_id: number;

  @ManyToOne(() => Question, (ques) => ques.option)
  @JoinColumn({ name: 'ques_id' })
  ques: Question;
}
