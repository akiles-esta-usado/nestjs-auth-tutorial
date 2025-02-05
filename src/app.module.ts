import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module.ts';
import { AuthModule } from './auth/auth.module.ts';
import { UsersModule } from './users/users.module.ts';

@Module({
  imports: [HelloModule, AuthModule, UsersModule],
})
export class AppModule {}
