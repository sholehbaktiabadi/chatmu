import { IsNumber } from 'class-validator';

export class GroupJoinDto {
  participant: number;

  @IsNumber()
  groupId: number;
}
