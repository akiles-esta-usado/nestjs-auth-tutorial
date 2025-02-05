import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthV2Service } from './auth-v2.service.ts';
import { PassportJwtGuard } from './guards/passport-jwt.guard.ts';
import { PassportLocalGuard } from './guards/passport-local.guard.ts';

@Controller('auth-v2')
export class PassportAuthController {
  constructor(private authService: AuthV2Service) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @UseGuards(PassportLocalGuard)
  login(@Req() request: Request) {
    return this.authService.signIn(request.user);
  }

  @Get('me')
  @UseGuards(PassportJwtGuard)
  getUserInfo(@Req() request) {
    return request.user;
  }
}
