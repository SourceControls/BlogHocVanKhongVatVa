import {
  IsArray,
  IsBoolean,
  IsBooleanString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty({ message: 'Tiêu đề không được để trống' })
  title: string;

  @IsNotEmpty({ message: 'URL bài viết không được để trống' })
  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  summary: string;

  @IsOptional()
  @IsString()
  htmlContent: string;

  @IsOptional()
  @IsString()
  featuredImage: string;

  @IsOptional()
  @IsBoolean()
  featured: boolean;

  @IsOptional()
  @IsNumber()
  createdBy: number;

  @IsOptional()
  @IsNumber()
  literary: number;

  @IsOptional()
  @IsArray()
  postTag: Array<number>;
}
