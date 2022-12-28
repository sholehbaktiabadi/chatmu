import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserRepository {
  constructor(private db: DataSource) {}

  async findOne(username: string) {
    return await this.db.getRepository(User).findOne({ where: { username } });
  }

  async getOne(id: number) {
    return await this.db.getRepository(User).findOne({ where: { id } });
  }
}
