import { IsString } from 'class-validator';

export class CreateGroupDto {
  channel: string;

  @IsString()
  groupName: string;

  creator: number;
}
