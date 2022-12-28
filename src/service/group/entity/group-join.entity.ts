import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Group } from './group.entity';

@Entity('groupJoin')
export class GroupJoin {
  @PrimaryGeneratedColumn('increment') id: number;
  @Column() participant: number;
  @Column() groupId: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Group, (res) => res.groupJoin)
  @JoinColumn({ name: 'groupId' })
  group: Group[];
}
