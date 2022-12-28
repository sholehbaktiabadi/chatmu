import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MessageRepository } from './message.repository';
import { UserModule } from '../user/user.module';
import { EventModule } from '../event/event.module';

@Module({
  imports: [UserModule, EventModule],
  providers: [MessageService, MessageRepository],
  controllers: [MessageController],
})
export class MessageModule {}
