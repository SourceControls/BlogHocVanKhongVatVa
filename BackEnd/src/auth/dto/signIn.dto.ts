import { IsEmail } from 'class-validator';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsEmail(undefined, { message: 'Email không đúng định dạng' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
