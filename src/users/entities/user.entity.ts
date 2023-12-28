import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;
    
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: string;

}