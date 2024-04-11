import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import CustomBaseEntity from './base.entity';
import { Recruiment } from './recruitment.entity';

@Entity()
export class Company extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'varchar' })
  website: string;

  @Column()
  contact: string;

  @Column()
  address: string;

  @Column()
  desription: string;

  @Column()
  avatarUrl: string;

  @OneToMany(() => Recruiment, (recruiment) => recruiment.company)
  recruiment: Recruiment;
}
