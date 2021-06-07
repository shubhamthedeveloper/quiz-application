import { Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from '../../common/BaseEntity';
import { User } from 'src/user/entities/user.entities';
import { Quiz } from 'src/quiz/entities/quiz.entity';
import { Option } from 'src/options/entities/option.entity';

@Entity()
export class Question extends BaseEntity {
  @Column()
  ques_text: string;

  @Column({ default: true })
  is_active: boolean;

  @Column()
  quiz_id: number;

  @Column()
  created_by: number;

  @ManyToOne(() => User, (user) => user.questions)
  @JoinColumn({ name: 'created_by' })
  user: User;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  @JoinColumn({ name: 'quiz_id' })
  quiz: Quiz;

  @OneToMany(() => Option, (option) => option.ques)
  option: Option[];
}
