import { Column, Entity, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../common/BaseEntity';
import { Option } from '../../options/entities/option.entity';

@Entity('answers')
export class Answer extends BaseEntity {
  @Column()
  part_id: number;

  @Column()
  ques_id: number;

  @Column()
  opt_id: number;

  @Column()
  is_correct: boolean;

  @OneToOne(() => Option)
  @JoinColumn({ name: 'opt_id' })
  option: Option;
}
