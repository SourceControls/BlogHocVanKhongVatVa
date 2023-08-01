import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SettingService } from './setting.service';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('setting')
@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @Get()
  findAll() {
    //rs[0]: default setting
    //rs[1]: current setting
    return this.settingService.findAll();
  }

  @Patch()
  update(@Body() updateSettingDto: UpdateSettingDto) {
    return this.settingService.update(updateSettingDto);
  }
}
