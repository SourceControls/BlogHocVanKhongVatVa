import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty({ default: 'tuanhung592001@gmail.com' })
  @IsEmail(undefined, { message: 'Email không đúng định dạng' })
  email: string;
  @ApiProperty({ default: '123456' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
