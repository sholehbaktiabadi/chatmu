import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupController } from './group.controller';
import { GroupRepository } from './group.repository';
import { EventModule } from '../event/event.module';

@Module({
  imports: [EventModule],
  providers: [GroupService, GroupRepository],
  controllers: [GroupController],
})
export class GroupModule {}
