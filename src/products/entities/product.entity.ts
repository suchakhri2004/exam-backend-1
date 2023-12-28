import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class products {
  @PrimaryGeneratedColumn()
  product_id: number;
    
  @Column()
  product_name: string;

  @Column()
  price: number;

}