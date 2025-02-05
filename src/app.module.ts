import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module.ts';
import { AuthModule } from './auth/auth.module.ts';
import { UsersModule } from './users/users.module.ts';
import { AuthV2Module } from './auth-v2/auth-v2.module.ts';

@Module({
  imports: [HelloModule, AuthModule, UsersModule, AuthV2Module],
})
export class AppModule {}
