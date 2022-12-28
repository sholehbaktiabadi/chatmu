import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './service/user/entity/user.entity';
import { UserModule } from './service/user/user.module';
import { EventModule } from './service/event/event.module';
import { AuthModule } from './service/auth/auth.module';
import { MessageModule } from './service/message/message.module';
import { Message } from './service/message/entity/message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'chatmu',
      entities: [User, Message],
      synchronize: true,
    }),
    AuthModule,
    EventModule,
    UserModule,
    MessageModule,
  ],
})
export class AppModule {}
