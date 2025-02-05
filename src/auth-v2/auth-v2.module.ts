import { Module } from '@nestjs/common';
import { AuthV2Service } from './auth-v2.service.ts';
import { PassportAuthController } from './passport-auth.controller.ts';
import { UsersModule } from '../users/users.module.ts';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy.ts';
import { JwtStrategy } from './strategies/jwt.strategy.ts';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants.ts';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      // https://github.com/nestjs/jwt/blob/master/README.md
      // https://github.com/auth0/node-jsonwebtoken#usage
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30s' },
    }),
    PassportModule,
  ],
  controllers: [PassportAuthController],
  providers: [AuthV2Service, LocalStrategy, JwtStrategy],
})
export class AuthV2Module {}
