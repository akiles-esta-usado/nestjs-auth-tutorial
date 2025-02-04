import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { HelloService } from './hello.service.ts';
import { CreateHelloDto } from './dto/create-hello.dto.ts';
import { UpdateHelloDto } from './dto/update-hello.dto.ts';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Post()
  create(@Body() createHelloDto: CreateHelloDto) {
    return this.helloService.create(createHelloDto);
  }

  @Get()
  findAll() {
    return this.helloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.helloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHelloDto: UpdateHelloDto) {
    return this.helloService.update(+id, updateHelloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.helloService.remove(+id);
  }
}
