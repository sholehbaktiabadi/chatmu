import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';
import { UserDto } from '../user/dto/user.dto';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('login')
  async login(@Body() req: UserDto) {
    return this.authService.login(req);
  }
}
