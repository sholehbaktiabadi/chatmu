import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MessageRepository } from './message.repository';
import { MessageDto } from './dto/message.dto';
import { UserService } from '../user/user.service';
import { EventService } from '../event/event.service';
import { UserAuthenticated } from '../auth/dto/user.dto';

@Injectable()
export class MessageService {
  constructor(
    private messageRepository: MessageRepository,
    private userService: UserService,
    private eventService: EventService,
  ) {}

  async createDirectMessage(user: UserAuthenticated, dto: MessageDto) {
    let idBucket: number[] = [];
    const selectUserByEmail = await this.userService.findOneByEmail(dto.to);
    if (!selectUserByEmail)
      throw new HttpException('receiver not found', HttpStatus.BAD_REQUEST);
    idBucket.push(selectUserByEmail.id);
    idBucket.push(user.id);
    idBucket = idBucket.sort();
    if (idBucket.length > 2)
      throw new HttpException('unexpected id length', HttpStatus.BAD_REQUEST);
    const joinId = idBucket.join('-to-');
    dto.channel = joinId.toString();
    dto.sender = user.id;
    dto.receiver = selectUserByEmail.id;
    this.eventService.directMessage(
      {
        message: dto.message,
        type: 'personal',
        senderName: user.username,
        receiverName: selectUserByEmail.username,
        senderID: dto.sender,
        receiverID: dto.receiver,
      },
      dto.channel,
    );
    return await this.messageRepository.createDirectMessage(dto);
  }
}
