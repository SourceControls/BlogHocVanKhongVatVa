import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Query } from '@nestjs/common/decorators';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
@ApiTags('comment')
@Controller('/post/:postSlug/comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(
    @Param('postSlug') postSlug: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.commentService.create(postSlug, createCommentDto);
  }

  @Get()
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  findAll(
    @Param('postSlug') postSlug?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.commentService.findAll({
      skip: (+page - 1 || 0) * (+limit || 3),
      take: +limit || 3,
      orderBy: {
        commentId: 'desc',
      },
      where: {
        post: {
          slug: postSlug,
        },
      },
      select: {
        commentId: true,
        content: true,
        createdAt: true,
        user: {
          select: {
            userId: false,
            name: true,
            slug: false,
            bio: false,
            avatarImage: true,
            coverImage: false,
            email: false,
            role: true,
          },
        },
      },
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id);
  }
}
