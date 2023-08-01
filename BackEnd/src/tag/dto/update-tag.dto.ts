import { PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateTagDto } from './create-tag.dto';

export class UpdateTagDto extends PartialType(CreateTagDto) {
  @IsNumber()
  updatedBy: number;
}
