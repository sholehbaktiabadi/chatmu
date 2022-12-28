import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateGroupDto } from './dto/group.dto';
import { Group } from './entity/group.entity';
import { GroupJoinDto } from './dto/goup-join.dto';
import { GroupJoin } from './entity/group-join.entity';
import { GroupMessageDto } from './dto/group-message.dto';
import { GroupMessage } from './entity/group-message.entity';

@Injectable()
export class GroupRepository {
  constructor(private db: DataSource) {}

  async createGroup(dto: CreateGroupDto) {
    return await this.db.getRepository(Group).save(dto);
  }

  async joinGroup(dto: GroupJoinDto) {
    return await this.db.getRepository(GroupJoin).save(dto);
  }

  async getAlljoinedGroup(user: number) {
    return await this.db
      .getRepository(GroupJoin)
      .find({ where: { participant: user }, relations: ['group'] });
  }

  async groupMessage(dto: GroupMessageDto) {
    return await this.db.getRepository(GroupMessage).save(dto);
  }

  async isGroupExist(id: number) {
    return await this.db.getRepository(Group).findOne({ where: { id } });
  }
}
