import { Injectable } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@Injectable()
@WebSocketGateway()
export class EventService {
    
      @WebSocketServer()
      server: Server;
    
      onModuleInit() {
        this.server.on('connection', async (socket) => {
            console.log(socket.id)
        });
      }
    
      onNewMessage(@MessageBody() body: any) {
        this.server.emit('chatRoom', body);
      }
}
