import { Module } from '@nestjs/common';
import { AuthService } from './auth.service.ts';
import { AuthController } from './auth.controller.ts';
import { UsersModule } from '../users/users.module.ts';
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
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
