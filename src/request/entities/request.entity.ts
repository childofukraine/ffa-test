import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Request } from '../../common/interfaces/request/request.interface';

@Entity('requests')
export class RequestEntity implements Request {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  text: string;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
