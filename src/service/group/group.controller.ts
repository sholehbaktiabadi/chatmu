import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/group.dto';
import { JwtAuthGuard } from '../auth/auth-jwt.guard';
import { Request } from 'express';
import { GroupJoinDto } from './dto/goup-join.dto';
import { GroupMessageDto } from './dto/group-message.dto';

@UseGuards(JwtAuthGuard)
@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Post()
  async createGroup(@Req() req: Request, @Body() dto: CreateGroupDto) {
    return await this.groupService.createGroup(
      { id: req.user.id, username: req.user.username },
      dto,
    );
  }

  @Post('join')
  async joinGroup(@Req() req: Request, @Body() dto: GroupJoinDto) {
    return await this.groupService.joinGroup(
      { id: req.user.id, username: req.user.username },
      dto,
    );
  }

  @Get()
  async groupList(@Req() req: Request) {
    return await this.groupService.getAlljoinedGroup(req.user.id);
  }

  @Post('send')
  async sendGroupMessage(@Req() req: Request, @Body() dto: GroupMessageDto) {
    return await this.groupService.groupMessage(
      { id: req.user.id, username: req.user.username },
      dto,
    );
  }
}
