import { Controller } from '@nestjs/common';
import { UsersService } from './users.service.ts';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
