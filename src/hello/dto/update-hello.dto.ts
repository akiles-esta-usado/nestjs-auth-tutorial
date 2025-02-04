import { PartialType } from '@nestjs/mapped-types';
import { CreateHelloDto } from './create-hello.dto.ts';

export class UpdateHelloDto extends PartialType(CreateHelloDto) {}
