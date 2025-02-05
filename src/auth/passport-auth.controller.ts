import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service.ts';
import { AuthGuard } from './guards/auth.guard.ts';
import { PassportLocalGuard } from './guards/passport-local.guard.ts';

@Controller('auth-v2')
export class PassportAuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @UseGuards(PassportLocalGuard)
  login(@Req() request: Request) {
    return this.authService.signIn(request.user);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getUserInfo(@Req() request) {
    return request.user;
  }
}
