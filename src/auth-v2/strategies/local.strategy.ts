import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthV2Service } from '../auth-v2.service.ts';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthV2Service) {
    super();
  }
  async validate(
    username: string,
    password: string,
  ): Promise<{ userId: number; username: string }> {
    const user = await this.authService.validateUser({
      username,
      password,
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
