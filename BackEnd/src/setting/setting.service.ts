import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateSettingDto } from './dto/update-setting.dto';

@Injectable()
export class SettingService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    try {
      const setting = await this.prisma.setting.findMany({});
      return { data: setting };
    } catch (error) {
      console.log(error.message);
    }
  }

  async update(updateSettingDto: UpdateSettingDto) {
    console.log(updateSettingDto);
    try {
      const updatedTag = await this.prisma.setting.updateMany({
        where: { NOT: { settingId: 1 } },
        data: updateSettingDto,
      });
      return {
        data: updatedTag,
        message: 'Cập nhật cài đặt thành công!',
      };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Có lỗi khi cập nhật cài đặt!');
    }
  }
}
