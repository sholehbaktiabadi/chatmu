import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Group } from './group.entity';

@Entity('groupMessage')
export class GroupMessage {
  @PrimaryGeneratedColumn('increment') id: number;
  @Column() groupId: number;
  @Column() message: string;
  @Column() sender: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Group, (res) => res.groupMessage)
  @JoinColumn({ name: 'groupId' })
  group: Group;
}
