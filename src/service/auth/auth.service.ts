import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../user/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(dto: UserDto) {
    const user = await this.userService.findOne(dto.username);
    if (!user) {
      throw new HttpException('User is not registered', HttpStatus.BAD_REQUEST);
    }
    if (dto.password !== user.password) {
      throw new HttpException('Password not match', HttpStatus.BAD_REQUEST);
    }
    const payload = { id: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
