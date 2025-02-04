import { beforeEach, describe, it } from 'jsr:@std/testing/bdd';
import { expect } from 'jsr:@std/expect';

import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller.ts';
import { HelloService } from './hello.service.ts';

describe('HelloController', () => {
  let controller: HelloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloService],
    }).compile();

    controller = module.get<HelloController>(HelloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
