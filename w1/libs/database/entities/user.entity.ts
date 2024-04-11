import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import CustomBaseEntity from './base.entity';
import { Apply } from './apply.entity';

export enum UserRole {
  Admin = 1,
  User = 2,
}
@Entity()
export class User extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'varchar' })
  gender: string;

  @Column()
  dateOfBirth: string;

  @Column()
  role: UserRole;

  @Column()
  major: string;

  @Column()
  pathFileCV: string;

  @Column()
  avatarUrl: string;

  @OneToMany(() => Apply, (apply) => apply.user)
  apply: Apply;
}
