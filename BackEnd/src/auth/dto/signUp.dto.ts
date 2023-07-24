import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignUpDto {
  @ApiProperty({ default: 'Tuấn Hùng' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ default: 'tuanhung592001@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ default: '123456' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
