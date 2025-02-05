import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from 'npm:@nestjs/jwt';

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
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  authenticate(input: LoginDto): AuthResult {
    const user = this.validateUser(input);

    if (!user) {
      throw new UnauthorizedException();
    }

    return {
      accessToken: 'fake-access',
      userId: user.userId,
      username: user.username,
    };
  }

  validateUser(input: LoginDto): SignInData | null {
    const user = this.usersService.findByName(input.username);

    if (user && user.password == input.password) {
      return {
        userId: user.userId,
        username: user.username,
      };
    }

    return null;
  }
}
