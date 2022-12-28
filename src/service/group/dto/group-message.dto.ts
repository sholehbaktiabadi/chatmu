import { IsString, IsNumber } from 'class-validator';

export class GroupMessageDto {
  @IsNumber()
  groupId: number;

  @IsString()
  message: string;

  sender: number;
}
