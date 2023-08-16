import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ad_display_position } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';

@Injectable()
export class AdvertisementService {
  constructor(private prisma: PrismaService) {}
  async create(createAdvertisementDto: CreateAdvertisementDto) {
    try {
      const newAdvertisement = await this.prisma.advertisement.create({
        data: createAdvertisementDto,
      });
      return {
        data: newAdvertisement,
        message: 'Tạo mới quảng cáo thành công!',
      };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Có lỗi khi tạo quảng cáo!');
    }
  }

  async findAll(query) {
    try {
      const categories = await this.prisma.advertisement.findMany({
        ...query,
      });
      return { data: categories };
    } catch (error) {
      console.log(error.message);
    }
  }

  async findClient(position) {
    try {
      const ad = await this.prisma.advertisement.findFirst({
        take: 1,
        where: {
          displayPosition: position,
          visibility: true,
          AND: [
            {
              startDate: {
                lte: new Date(), // Start date is less than or equal to the current date
              },
            },
            {
              endDate: {
                gte: new Date(), // End date is greater than or equal to the current date
              },
            },
          ],
        },
      });
      if (ad)
        await this.prisma.advertisement.update({
          where: {
            advertisementId: ad.advertisementId,
          },
          data: {
            impressionCount: {
              increment: 1,
            },
          },
        });
      return { data: [ad] };
    } catch (error) {
      console.log(error.message);
    }
  }
  async findOne(id: number) {
    try {
      const advertisement = await this.prisma.advertisement.findUnique({
        where: { advertisementId: id },
      });
      return { data: advertisement };
    } catch (error) {
      console.log(error.message);
    }
  }

  async update(id: number, updateAdvertisementDto: UpdateAdvertisementDto) {
    delete updateAdvertisementDto.createdBy;
    try {
      const updatedAdvertisement = await this.prisma.advertisement.update({
        where: { advertisementId: id },
        data: updateAdvertisementDto,
      });
      return {
        data: updatedAdvertisement,
        message: 'Cập nhật thành công!',
      };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Có lỗi khi cập nhật!');
    }
  }
  async click(id: number) {
    try {
      const updatedAdvertisement = await this.prisma.advertisement.update({
        where: { advertisementId: id },
        data: {
          clickCount: {
            increment: 1,
          },
        },
      });
      return {
        data: updatedAdvertisement,
      };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Có lỗi khi cập nhật!');
    }
  }

  async remove(id: number) {
    try {
      const deletedAdvertisement = await this.prisma.advertisement.delete({
        where: { advertisementId: id },
      });
      return {
        data: deletedAdvertisement,
        message: 'Đã xóa!',
      };
    } catch (error) {
      throw new InternalServerErrorException('Có lỗi khi xóa!');
    }
  }
}
