import { Injectable } from '@nestjs/common';
import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common/exceptions';
import { postReaction_type, post_status } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

const include = {
  createdByUser: {
    select: {
      name: true,
      role: true,
      email: true,
      website: true,
      avatarImage: true,
    },
  },
  postLiterary: {
    select: {
      literaryId: true,
      title: true,
      slug: true,
    },
  },
  postTag: {
    select: {
      tag: {
        select: {
          tagId: true,
          slug: true,
          tagName: true,
        },
      },
    },
  },
};

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}
  async create(createPostDto: CreatePostDto) {
    const postTag = createPostDto.postTag
      ? createPostDto.postTag.map((tag) => ({
          tagId: +tag,
        }))
      : [];
    delete createPostDto.postTag;
    try {
      const newPost = await this.prisma.post.create({
        data: {
          ...createPostDto,
          postTag: {
            // Create the tags using the provided tagNames
            create: postTag,
          },
        },
        include,
      });
      return {
        data: newPost,
        message: 'Bài viết đã được tạo và lưu vào mục nháp',
      };
    } catch (error) {
      if (error.code === 'P2002')
        throw new ConflictException('Vui lòng sử dụng URL khác!');
      else {
        console.log(error.message);
        throw new InternalServerErrorException(
          'Có lỗi xảy ra khi tạo bài viết!',
        );
      }
    }
  }

  async findAll(query) {
    try {
      const posts = await this.prisma.post.findMany({
        ...query,
        include,
      });
      return { data: posts };
    } catch (error) {
      console.log(error.message);
      return { data: [], message: error.message };
    }
  }

  async findOne(data) {
    const query = isNaN(+data) ? { slug: data } : { postId: +data };
    const posts = await this.prisma.post.findUnique({
      where: query,
      include,
    });
    return { data: posts };
  }

  async updateStatus(
    postId: number,
    updatedBy: number,
    publishedBy: number,
    newStatus: post_status,
  ) {
    if (
      newStatus === post_status.PUBLISHED ||
      newStatus === post_status.PENDING
    ) {
      const post = await this.prisma.post.findUnique({
        where: {
          postId,
        },
      });
      let preMessage = 'Không thể đăng!!';
      if (newStatus === post_status.PENDING)
        preMessage = 'Không thể yêu cầu đăng!!';
      if (!post.htmlContent || !post.summary) {
        throw new BadRequestException(
          preMessage + ' bài viết thiếu nội dung hoặc tóm tắt',
        );
      }
      if (!post.featuredImage) {
        throw new BadRequestException(
          preMessage + ' bài viết thiếu thiếu ảnh bìa',
        );
      }
      if (!post.literary) {
        throw new BadRequestException(
          preMessage + ' bài viết thiếu thông tin về tác phẩm',
        );
      }
    }
    try {
      const updatedPost = await this.prisma.post.update({
        where: {
          postId,
        },
        data: {
          status: newStatus,
          publishedBy,
          updatedBy,
        },
        include,
      });
      const postCount = await this.prisma.post.count({
        where: {
          AND: [
            {
              literary: updatedPost.literary,
            },
            {
              status: 'PUBLISHED',
            },
          ],
        },
      });
      const updatedLiterary = await this.prisma.literary.update({
        where: {
          literaryId: updatedPost.literary,
        },
        data: {
          postCount: postCount,
        },
      });

      return {
        data: updatedPost,
        message:
          newStatus === post_status.PUBLISHED
            ? 'Đăng bài viết thành công'
            : newStatus === 'HIDE'
            ? 'Đã ẩn bài viết'
            : 'Đã gửi yêu cầu duyệt đến quản trị viên!',
      };
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Có lỗi xảy ra khi đăng bài!');
    }
  }
  async update(id: number, updatePostDto: UpdatePostDto) {
    const postTag = updatePostDto.postTag
      ? updatePostDto.postTag.map((tag) => ({
          tagId: +tag,
        }))
      : [];

    delete updatePostDto.postTag;
    try {
      await this.prisma.postTag.deleteMany({ where: { postId: id } });
      const updatedPost = await this.prisma.post.update({
        where: {
          postId: id,
        },
        data: {
          ...updatePostDto,
          status: 'DRAFT',
          postTag: {
            // Create the tags using the provided tagNames
            create: postTag,
          },
        },

        include,
      });
      return { data: updatedPost, message: 'Cập nhật bài viết thành công' };
    } catch (error) {
      console.error(error.message);
      throw new InternalServerErrorException(
        'Có lỗi xảy ra khi cập nhật bài viết!',
      );
    }
  }

  async getOwnReaction(slug: string, createdBy: number) {
    try {
      const post = await this.prisma.post.findUnique({
        where: {
          slug,
        },
      });
      const reaction = await this.prisma.postReaction.findUnique({
        where: {
          postId_createdBy: {
            createdBy,
            postId: post.postId,
          },
        },
      });
      return { data: reaction };
    } catch (error) {
      return { data: [], message: error.message };
    }
  }
  async reaction(slug: string, createdBy: number, type: postReaction_type) {
    try {
      const post = await this.prisma.post.findUnique({
        where: {
          slug,
        },
      });
      const reaction = await this.prisma.postReaction.findUnique({
        where: {
          postId_createdBy: {
            createdBy,
            postId: post.postId,
          },
        },
      });
      //delete reaction
      if (reaction?.type === type) {
        const deletedReaction = await this.prisma.postReaction.delete({
          where: {
            postId_createdBy: {
              createdBy,
              postId: post.postId,
            },
          },
        });
        //update likeCoutnt
        let field = 'likeCount';
        if (deletedReaction.type == 'DISLIKE') field = 'dislikeCount';

        const updatedPost = await this.prisma.post.update({
          where: {
            postId: post.postId,
          },
          data: {
            [field]: { decrement: 1 },
          },
          select: {
            postId: true,
            likeCount: true,
            slug: true,

            view: true,
            dislikeCount: true,
          },
        });
        return { data: updatedPost };
      }

      //update reaction
      const upsertedReaction = await this.prisma.postReaction.upsert({
        where: {
          postId_createdBy: {
            postId: post.postId,
            createdBy,
          },
        },
        create: {
          postId: post.postId,
          createdBy,
          type,
        },
        update: {
          type,
        },
      });
      //re-count added reaction
      let field = 'likeCount';
      if (type == 'DISLIKE') field = 'dislikeCount';
      let updatedPost = await this.prisma.post.update({
        where: {
          postId: post.postId,
        },
        data: {
          [field]: { increment: 1 },
        },
        select: {
          postId: true,
          likeCount: true,
          slug: true,
          view: true,
          dislikeCount: true,
        },
      });

      //re-count removed reaction
      if (reaction) {
        let field = 'likeCount';
        if (type == 'LIKE') field = 'dislikeCount';
        updatedPost = await this.prisma.post.update({
          where: {
            postId: post.postId,
          },
          data: {
            [field]: { decrement: 1 },
          },
          select: {
            postId: true,
            likeCount: true,
            slug: true,

            view: true,
            dislikeCount: true,
          },
        });
      }

      return { data: updatedPost };
    } catch (error) {
      console.error(error.message);
      throw new InternalServerErrorException('Có lỗi xảy ra!');
    }
  }
  async countView(slug: string) {
    try {
      const updatedPost = await this.prisma.post.update({
        where: {
          slug,
        },
        data: {
          view: { increment: 1 },
        },
        select: {
          postId: true,
          likeCount: true,
          slug: true,
          view: true,
          dislikeCount: true,
        },
      });

      return { data: updatedPost };
    } catch (error) {
      console.error(error.message);
      throw new InternalServerErrorException('Có lỗi xảy ra!');
    }
  }
  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
