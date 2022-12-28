import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { UserDto } from '../user/dto/user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

  @HttpCode(200)
  @Post('login')
  async login(@Body() req: UserDto){
    console.log(req)
    return this.authService.login(req)
  }
}