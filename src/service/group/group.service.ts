import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GroupRepository } from './group.repository';
import { CreateGroupDto } from './dto/group.dto';
import { UserAuthenticated } from '../auth/dto/user.dto';
import { GroupJoinDto } from './dto/goup-join.dto';
import { GroupMessageDto } from './dto/group-message.dto';
import { EventService } from '../event/event.service';

@Injectable()
export class GroupService {
  constructor(
    private groupRepository: GroupRepository,
    private eventService: EventService,
  ) {}

  async createGroup(user: UserAuthenticated, dto: CreateGroupDto) {
    dto.creator = user.id;
    dto.channel = Date.now().toString();
    return await this.groupRepository.createGroup(dto);
  }

  async getAlljoinedGroup(user: number) {
    return await this.groupRepository.getAlljoinedGroup(user);
  }

  async joinGroup(user: UserAuthenticated, dto: GroupJoinDto) {
    dto.participant = user.id;
    return await this.groupRepository.joinGroup(dto);
  }

  async groupMessage(user: UserAuthenticated, dto: GroupMessageDto) {
    dto.sender = user.id;
    const isGroupExist = await this.groupRepository.isGroupExist(dto.groupId);
    if (!isGroupExist)
      throw new HttpException(
        'you are not a group member',
        HttpStatus.BAD_REQUEST,
      );
    this.eventService.groupMessage(
      {
        message: dto.message,
        type: 'group',
        senderName: user.username,
        senderID: dto.sender,
      },
      isGroupExist.channel,
    );
    return await this.groupRepository.groupMessage(dto);
  }
}
