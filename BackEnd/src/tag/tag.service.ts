import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}
  async create(createTagDto: CreateTagDto) {
    try {
      const newTag = await this.prisma.tag.create({
        data: createTagDto,
      });
      return { data: newTag, message: 'Tạo mới thẻ thành công!' };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Có lỗi khi tạo thẻ!');
    }
  }

  async findAll(query) {
    try {
      const categories = await this.prisma.tag.findMany({
        ...query,
      });
      return { data: categories };
    } catch (error) {
      console.log(error.message);
    }
  }

  async findOne(id: number) {
    try {
      const tag = await this.prisma.tag.findUnique({
        where: { tagId: id },
      });
      return { data: tag };
    } catch (error) {
      console.log(error.message);
    }
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    delete updateTagDto.createdBy;
    try {
      const updatedTag = await this.prisma.tag.update({
        where: { tagId: id },
        data: updateTagDto,
      });
      return {
        data: updatedTag,
        message: 'Cập nhật thẻ thành công!',
      };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Có lỗi khi cập nhật thẻ!');
    }
  }

  async remove(id: number) {
    try {
      const deletedTag = await this.prisma.tag.delete({
        where: { tagId: id },
      });
      return {
        data: deletedTag,
        message: 'Xóa thẻ thành công!',
      };
    } catch (error) {
      throw new InternalServerErrorException('Có lỗi khi xóa thẻ!');
    }
  }
}
