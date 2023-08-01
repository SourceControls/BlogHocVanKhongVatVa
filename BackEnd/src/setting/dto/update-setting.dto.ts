import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateSettingDto } from './create-setting.dto';

export class UpdateSettingDto {
  @IsString({ message: 'Dữ liệu không đúng định dạng' })
  fontFamily: string;

  @IsString({ message: 'Dữ liệu không đúng định dạng' })
  primaryColor: string;

  @IsString({ message: 'Dữ liệu không đúng định dạng' })
  webTitle: string;

  @IsString({ message: 'Dữ liệu không đúng định dạng' })
  logo: string;

  @IsString({ message: 'Dữ liệu không đúng định dạng' })
  favIcon: string;

  @IsString({ message: 'Dữ liệu không đúng định dạng' })
  homeHeroTitle: string;

  @IsString({ message: 'Dữ liệu không đúng định dạng' })
  homeHeroSubtitle: string;

  @IsString({ message: 'Dữ liệu không đúng định dạng' })
  homeHeroCover: string;

  @IsString({ message: 'Dữ liệu không đúng định dạng' })
  readPostCover: string;
}
