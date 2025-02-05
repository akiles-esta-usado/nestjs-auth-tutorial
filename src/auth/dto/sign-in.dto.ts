import { IsNotEmpty, IsString } from 'npm:class-validator';

export class SignInDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
