import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GroupMessage } from './group-message.entity';
import { GroupJoin } from './group-join.entity';

@Entity('group')
export class Group {
  @PrimaryGeneratedColumn('increment') id: number;
  @Column() channel: string;
  @Column() groupName: string;
  @Column() creator: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => GroupMessage, (res) => res.group)
  groupMessage: GroupMessage[];

  @OneToMany(() => GroupJoin, (res) => res.group)
  groupJoin: GroupJoin[];
}
