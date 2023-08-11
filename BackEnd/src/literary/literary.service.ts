import {
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLiteraryDto } from './dto/create-literary.dto';
import { UpdateLiteraryDto } from './dto/update-literary.dto';

const select = {
  literaryId: true,
  title: true,
  slug: true,
  intro: true,
  summary: true,
  authorName: true,
  featured: true,
  visibility: true,
  timeOfCreation: true,
  image: true,
  createdAt: true,
  createdBy: true,
  updatedAt: true,
  updatedBy: true,
  view: true,
  postCount: true,
  updatedByUser: false,
  createdByUser: false,
  literaryCategory: {
    select: {
      category: {
        select: {
          categoryId: true,
          categoryName: true,
          slug: true,
        },
      },
    },
  },
};

@Injectable()
export class LiteraryService {
  constructor(private prisma: PrismaService) {}
  async create(createLiteraryDto: CreateLiteraryDto) {
    const literaryCategory = createLiteraryDto.categories.map((e) => ({
      categoryId: e,
    }));
    delete createLiteraryDto.categories;
    try {
      const createdLiterary = await this.prisma.literary.create({
        data: {
          ...createLiteraryDto,
          literaryCategory: {
            create: literaryCategory,
          },
        },
      });
      return { data: createdLiterary, message: 'Thêm tác phẩm thành công!' };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Có lỗi xảy ra khi tạo tác phẩm!');
    }
  }
  async findAll(query) {
    try {
      const literaries = await this.prisma.literary.findMany({
        ...query,
        select,
      });
      return { data: literaries };
    } catch (error) {
      console.log(error.message);
      return { message: error.message };
    }
  }

  async findOne(data: string | number) {
    try {
      const query =
        typeof data === 'number' ? { literaryId: data } : { slug: data };
      const literary = await this.prisma.literary.findUnique({
        where: query,
        select,
      });
      return { data: literary };
    } catch (error) {
      console.log(error.message);
      throw new ForbiddenException(error.message);
    }
  }
  async countView(data: string | number) {
    try {
      const query =
        typeof data === 'number' ? { literaryId: data } : { slug: data };
      const updatedLiterary = await this.prisma.literary.update({
        where: query,
        data: {
          view: { increment: 1 },
        },
        select,
      });
      return { data: updatedLiterary };
    } catch (error) {
      console.log(error.message);
      throw new ForbiddenException(error.message);
    }
  }

  async update(id: number, updateLiteraryDto: UpdateLiteraryDto) {
    const literaryCategory = updateLiteraryDto.categories.map((e) => ({
      categoryId: e,
    }));
    delete updateLiteraryDto.categories;
    try {
      await this.prisma.literaryCategory.deleteMany({
        where: { literaryId: id },
      });
      const updatedLiterary = await this.prisma.literary.update({
        where: {
          literaryId: id,
        },
        data: {
          ...updateLiteraryDto,
          literaryCategory: {
            create: literaryCategory,
          },
        },
        select,
      });
      return {
        data: updatedLiterary,
        message: 'Cập nhật tác phẩm thành công!',
      };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Có lỗi xảy ra khi tạo tác phẩm!');
    }
  }

  async remove(id: number) {
    try {
      const deletedLiterary = await this.prisma.literary.delete({
        where: {
          literaryId: id,
        },
        select,
      });
      return {
        data: deletedLiterary,
        message: 'Đã xóa 1 tác phẩm!',
      };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Có lỗi xảy ra khi xóa tác phẩm!');
    }
  }
}
