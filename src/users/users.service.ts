import { Injectable } from '@nestjs/common';

export type User = {
  userId: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'Alice',
      password: 'topsecret', // TODO: Use a hash
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess', // TODO: Use a hash
    },
  ];

  findByName(username: string): User | undefined {
    // Usualmente el usuario se obtiene de manera asíncrona
    return this.users.find((user) => user.username === username);
  }
}
