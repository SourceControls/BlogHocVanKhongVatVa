import { Injectable } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

const select = {
  commentId: true,
  content: true,
  createdAt: true,
  user: {
    select: {
      userId: true,
      name: true,
      slug: false,
      bio: false,
      avatarImage: true,
      coverImage: false,
      email: false,
      role: true,
    },
  },
};
@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async create(postSlug: string, createCommentDto: CreateCommentDto) {
    try {
      const { postId } = await this.prisma.post.findUnique({
        where: { slug: postSlug },
      });
      const createdComment = await this.prisma.comment.create({
        data: {
          ...createCommentDto,
          postId,
        },
        select,
      });
      return { data: createdComment };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Có lỗi khi bình luận');
    }
  }

  async findAll(query) {
    const comments = await this.prisma.comment.findMany({
      ...query,
      select,
    });
    return { data: comments };
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  async remove(commentId: number, userId: number) {
    const comment = await this.prisma.comment.findUnique({
      where: {
        commentId,
      },
    });
    if (comment.createdBy != userId) {
      throw new InternalServerErrorException('Không có quyền!');
    }
    try {
      const deletedComment = await this.prisma.comment.delete({
        where: {
          commentId,
        },
      });
      return { data: deletedComment, message: 'Đã xóa bình luận!' };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Có lỗi khi xóa bình luận!');
    }
  }
}
