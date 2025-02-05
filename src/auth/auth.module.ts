import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.ts';
import { AuthController } from './auth.controller.ts';
import { PassportAuthController } from './passport-auth.controller.ts';
import { UsersModule } from '../users/users.module.ts';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants.ts';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy.ts';

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
  controllers: [AuthController, PassportAuthController],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
