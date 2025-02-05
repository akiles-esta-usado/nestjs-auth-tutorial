import { beforeEach, describe, it } from '@std/testing/bdd';
import { expect } from '@std/expect';

import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller.ts';
import { AuthService } from './auth.service.ts';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module.ts';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      imports: [JwtModule, UsersModule],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
