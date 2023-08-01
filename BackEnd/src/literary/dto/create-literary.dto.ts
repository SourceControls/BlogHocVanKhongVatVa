import {
  IsBoolean,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateLiteraryDto {
  @IsString()
  @IsNotEmpty({ message: 'Không được để trống tiêu đề' })
  title: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Không được để trống URL' })
  slug: string;

  @IsString()
  @IsOptional()
  intro: string;

  @IsString()
  @IsOptional()
  summary: string;

  @IsString()
  @IsOptional()
  authorName: string;

  @IsBoolean()
  @IsOptional()
  featured: boolean;
  @IsBoolean()
  @IsOptional()
  visibility: boolean;

  @IsString()
  @IsOptional()
  timeOfCreation: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsNumber()
  @IsOptional()
  createdBy: number;
}
