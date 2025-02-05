import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.ts';
import { UpdateUserDto } from './dto/update-user.dto.ts';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(username: string): User | undefined {
    return this.users.find((user) => user.username === username);
  }

  update(username: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${username} user`;
  }

  remove(username: string) {
    return `This action removes a #${username} user`;
  }
}
