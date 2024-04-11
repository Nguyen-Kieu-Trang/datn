import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import CustomBaseEntity from './base.entity';
import { User } from './user.entity';
import { Recruiment } from './recruitment.entity';

export enum TypeApply {
  APPLY = 1,
  SAVED = 2,
}

@Entity()
export class Apply extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column()
  recruimentId: number;

  @Column()
  userId: number;

  @Column()
  type: TypeApply;

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => Recruiment, (recruiment) => recruiment.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'recruimentId', referencedColumnName: 'id' })
  recruiment: Recruiment;
}
