import { PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateLiteraryDto } from './create-literary.dto';

export class UpdateLiteraryDto extends PartialType(CreateLiteraryDto) {
  @IsNumber()
  updatedBy: number;
}
