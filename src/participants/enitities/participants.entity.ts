import {
  Column,
  Entity,
  Unique,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entities';
import { BaseEntity } from '../../common/BaseEntity';
import { Quiz } from '../../quiz/entities/quiz.entity';

@Entity('participants')
export class Participant extends BaseEntity {
  @Column()
  quiz_id: number;

  @Column()
  user_id: number;

  @OneToOne(() => User, (users) => users.participants)
  @JoinColumn({ name: 'user_id' })
  users: User;

  @ManyToOne(() => Quiz, (quizes) => quizes.participants)
  @JoinColumn({ name: 'quiz_id' })
  quizes: Quiz;
}
