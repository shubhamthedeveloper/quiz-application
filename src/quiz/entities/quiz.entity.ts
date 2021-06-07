import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
// import { Admin } from 'src/user/entities/admin.entities';
import { BaseEntity } from '../../common/BaseEntity';
import { Participant } from 'src/participants/enitities/participants.entity';
import { Question } from '../../questions/entities/question.entity';
import { User } from '../../user/entities/user.entities';

@Entity('quizes')
export class Quiz extends BaseEntity {
  @Column()
  title: string;

  @Column()
  created_by: number;

  @ManyToOne(() => User, (user) => user.quiz)
  @JoinColumn({ name: 'created_by' })
  user: User;

  @OneToMany(() => Participant, (participants) => participants.quizes)
  participants: Participant[];

  @OneToMany(() => Question, (questions) => questions.quiz)
  questions: Question[];
}
