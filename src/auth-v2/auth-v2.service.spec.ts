import { beforeEach, describe, it } from '@std/testing/bdd';
import { expect } from '@std/expect';

import { Test, TestingModule } from '@nestjs/testing';
import { AuthV2Service } from './auth-v2.service.ts';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module.ts';

describe('AuthV2Service', () => {
  let service: AuthV2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [JwtModule, UsersModule],
      providers: [AuthV2Service],
    }).compile();

    service = module.get<AuthV2Service>(AuthV2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
