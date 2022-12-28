import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class MessageDto {
  @IsString()
  @IsEmail()
  to: string;

  channel: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  sender: number;
  receiver: number;
}
