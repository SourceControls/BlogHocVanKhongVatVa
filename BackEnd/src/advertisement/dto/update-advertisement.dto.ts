import { PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateAdvertisementDto } from './create-advertisement.dto';

export class UpdateAdvertisementDto extends PartialType(
  CreateAdvertisementDto,
) {
  @IsNumber()
  updatedBy: number;
}
