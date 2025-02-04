import { Injectable } from '@nestjs/common';
import { CreateHelloDto } from './dto/create-hello.dto.ts';
import { UpdateHelloDto } from './dto/update-hello.dto.ts';

@Injectable()
export class HelloService {
  create(createHelloDto: CreateHelloDto) {
    return createHelloDto;
  }

  findAll() {
    return `This action returns all hello`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hello`;
  }

  update(id: number, updateHelloDto: UpdateHelloDto) {
    return { id, ...updateHelloDto };
  }

  remove(id: number) {
    return `This action removes a #${id} hello`;
  }
}
