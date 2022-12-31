import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { MessageService } from './message.service';
import { JwtAuthGuard } from '../auth/auth-jwt.guard';
import { MessageDto } from './dto/message.dto';
import { Request } from 'express';

@UseGuards(JwtAuthGuard)
@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post('direct')
  async createDirectMessage(@Req() req: Request, @Body() dto: MessageDto) {
    return await this.messageService.createDirectMessage(
      { id: req.user.id, username: req.user.username },
      dto,
    );
  }

  @Get('channel')
  async getChannel(@Req() req: Request) {
    return await this.messageService.getChannel(req.user.id);
  }
}
