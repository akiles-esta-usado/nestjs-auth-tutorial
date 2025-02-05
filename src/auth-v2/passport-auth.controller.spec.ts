import { beforeEach, describe, it } from '@std/testing/bdd';
import { expect } from '@std/expect';

import { Test, TestingModule } from '@nestjs/testing';
import { PassportAuthController } from './passport-auth.controller.ts';
import { AuthV2Service } from './auth-v2.service.ts';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module.ts';

describe('PassportAuthController', () => {
  let controller: PassportAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PassportAuthController],
      imports: [JwtModule, UsersModule],
      providers: [AuthV2Service],
    }).compile();

    controller = module.get<PassportAuthController>(PassportAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
