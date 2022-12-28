import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('message')
export class Message {
  @PrimaryGeneratedColumn('increment') id: number;
  @Column() channel: string;
  @Column() message: string;
  @Column() sender: number;
  @Column() receiver: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
