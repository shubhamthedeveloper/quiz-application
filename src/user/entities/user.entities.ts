import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  Unique,
  OneToOne,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from './user-role.enum';
import { Participant } from '../../participants/enitities/participants.entity';
import { BaseEntity } from '../../common/BaseEntity';
import { Question } from '../../questions/entities/question.entity';
import { Quiz } from '../../quiz/entities/quiz.entity';

@Entity('users')
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @BeforeInsert()
  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: true })
  is_active: boolean;

  @Column()
  role: Role;

  @OneToOne(() => Participant, (participants) => participants.users)
  participants: Participant;

  @OneToMany(() => Question, (question) => question.user)
  questions: Question[];

  @OneToMany(() => Quiz, (quiz) => quiz.user)
  quiz: Quiz[];

  async validatePassword(password: string): Promise<boolean> {
    const match = await bcrypt.compare(password, this.password);
    return match;
  }
}
