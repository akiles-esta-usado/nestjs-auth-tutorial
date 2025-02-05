import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service.ts';
import { LoginDto } from './dto/login.dto.ts';

type SignInData = {
  userId: number;
  username: string;
};
type AuthResult = {
  accessToken: string;
  userId: number;
  username: string;
};

@Injectable()
export class AuthV2Service {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  validateUser(input: LoginDto): SignInData | null {
    const user = this.usersService.findByName(input.username);

    if (user && user.password === input.password) {
      return {
        userId: user.userId,
        username: user.username,
      };
    }

    return null;
  }

  signIn(user: SignInData): AuthResult {
    const tokenPayload = {
      sub: user.userId,
      username: user.username,
    };

    const accessToken = this.jwtService.sign(tokenPayload);

    return {
      accessToken,
      username: user.username,
      userId: user.userId,
    };
  }
}
