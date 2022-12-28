import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Req } from '@nestjs/common/decorators/http/route-params.decorator';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { JwtAuthGuard } from '../auth/auth-jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    async getOne(@Req() req: any){
        console.log()
        return await this.userService.getOne(req.user.id)
    }
}
