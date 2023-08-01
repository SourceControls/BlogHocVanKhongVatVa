import {
  IsBoolean,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty({ message: 'Không được để trống tên thẻ' })
  @IsString()
  tagName: string;
  @IsOptional()
  @IsString()
  slug: string;
  @IsOptional()
  @IsString()
  description: string;
  @IsOptional()
  @IsBoolean()
  visibility: boolean;
  @IsOptional()
  @IsNumber()
  createdBy: number;
}
