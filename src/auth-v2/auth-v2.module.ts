import { Module } from '@nestjs/common';
import { AuthV2Service } from './auth-v2.service.ts';
import { PassportAuthController } from './passport-auth.controller.ts';
import { UsersModule } from '../users/users.module.ts';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy.ts';
import { JwtStrategy } from './strategies/jwt.strategy.ts';

@Module({
  imports: [
    UsersModule,
    PassportModule,
  ],
  controllers: [PassportAuthController],
  providers: [AuthV2Service, LocalStrategy, JwtStrategy],
})
export class AuthV2Module {}
