import { Injectable } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { P2PDto } from './dto/p2p.dto';

@Injectable()
@WebSocketGateway()
export class EventService {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', async (socket) => {
      console.log(socket.id);
    });
  }

  directMessage(@MessageBody() body: P2PDto, channel: string) {
    this.server.emit(channel, body); // channel is combined by id sender with id reciever
  }

  groupMessage(@MessageBody() body: P2PDto, channel: string) {
    this.server.emit(channel, body); // channel is combined by id sender with id reciever
  }
}
