import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Message } from './entity/message.entity';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class MessageRepository {
  constructor(private db: DataSource) {}

  async createDirectMessage(dto: MessageDto) {
    return await this.db.getRepository(Message).save(dto);
  }
}
