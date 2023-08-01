import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'Không được để trống tên danh mục' })
  @IsString()
  categoryName: string;
  @IsNotEmpty({ message: 'Không được để trống URL của danh mục' })
  @IsOptional()
  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  createdBy: number;
}
