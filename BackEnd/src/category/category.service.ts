import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const newCategory = await this.prisma.category.create({
        data: createCategoryDto,
        include: {
          literaryCategory: true,
        },
      });
      return { data: newCategory, message: 'Tạo mới danh mục thành công!' };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Có lỗi khi tạo danh mục!');
    }
  }

  async findAll(query) {
    try {
      const categories = await this.prisma.category.findMany({
        ...query,
      });
      return { data: categories };
    } catch (error) {
      console.log(error.message);
    }
  }

  async findOne(id: number) {
    try {
      const newCategory = await this.prisma.category.findUnique({
        where: { categoryId: id },
        include: {
          literaryCategory: true,
        },
      });
      return { data: newCategory, message: 'Tạo mới danh mục thành công!' };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Có lỗi khi tạo danh mục!');
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    delete updateCategoryDto.createdBy;
    try {
      const updatedCategory = await this.prisma.category.update({
        where: { categoryId: id },
        data: updateCategoryDto,
        include: {
          literaryCategory: true,
        },
      });
      return {
        data: updatedCategory,
        message: 'Cập nhật danh mục thành công!',
      };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Có lỗi khi cập nhật danh mục!');
    }
  }

  async remove(id: number) {
    try {
      const deletedCategory = await this.prisma.category.delete({
        where: { categoryId: id },
        include: {
          literaryCategory: true,
        },
      });
      return {
        data: deletedCategory,
        message: 'Xóa danh mục thành công!',
      };
    } catch (error) {
      throw new InternalServerErrorException('Có lỗi khi xóa danh mục!');
    }
  }
}
