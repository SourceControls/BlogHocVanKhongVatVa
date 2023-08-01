import { ad_display_position } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAdvertisementDto {
  @IsNotEmpty({ message: 'Không được để trống tiêu đề quảng cáo' })
  title: string;
  @IsOptional()
  description: string;
  @IsOptional()
  image: string;
  @IsOptional()
  displayPosition: ad_display_position;
  @IsOptional()
  target: string;
  @IsOptional()
  startDate: string;
  @IsOptional()
  endDate: string;
  @IsOptional()
  visibility: boolean;
  @IsOptional()
  @IsNumber()
  price: number;
  @IsOptional()
  @IsNumber()
  createdBy: number;
}
