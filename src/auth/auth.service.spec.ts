import { beforeEach, describe, it } from '@std/testing/bdd';
import { expect } from '@std/expect';

import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service.ts';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module.ts';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [JwtModule, UsersModule],
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
