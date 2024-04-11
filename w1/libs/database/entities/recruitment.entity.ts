import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import CustomBaseEntity from './base.entity';
import { Company } from './company.entity';
import { Apply } from './apply.entity';

@Entity()
export class Recruiment extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  position: string;

  @Column()
  experience: string;

  @Column()
  majorRelation: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column()
  salary: string;

  @Column()
  companyId: number;

  @ManyToOne(() => Company, (company) => company.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'companyId', referencedColumnName: 'id' })
  company: Company;

  @OneToMany(() => Apply, (apply) => apply.recruiment)
  apply: Apply;
}
