import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './service/user/entity/user.entity';
import { UserModule } from './service/user/user.module';
import { EventModule } from './service/event/event.module';
import { AuthModule } from './service/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'chatmu',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    EventModule,
    UserModule,
  ],
})
export class AppModule {}
