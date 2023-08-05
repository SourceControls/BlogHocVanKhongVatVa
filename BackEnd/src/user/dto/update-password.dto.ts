import { PartialType } from '@nestjs/mapped-types';
import { user_role, user_status } from '@prisma/client';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  bio: string;

  @IsOptional()
  @IsString()
  avatarImage: string;

  @IsOptional()
  @IsString()
  coverImage: string;

  @IsOptional()
  @IsEnum(user_status)
  status: user_status;

  @IsOptional()
  @IsString()
  website: string;

  @IsOptional()
  @IsEnum(user_role)
  role: user_role;

  updatedBy: number;
}
