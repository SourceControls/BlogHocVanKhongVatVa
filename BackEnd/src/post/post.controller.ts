import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/public.decorator';
import { Put, Req } from '@nestjs/common/decorators';
import { Request } from 'express';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles, ROLES_KEY } from 'src/auth/roles.decorator';
import { postReaction_type, post_status, user_role } from '@prisma/client';
@Controller('post')
@ApiTags('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Public()
  @Get()
  @ApiQuery({ name: 'key', required: false, type: String })
  @ApiQuery({ name: 'tag', required: false, type: String })
  @ApiQuery({ name: 'featured', required: false, type: Boolean })
  @ApiQuery({ name: 'status', required: false, enum: post_status })
  @ApiQuery({ name: 'literarySlug', required: false, type: String })
  @ApiQuery({ name: 'userSlug', required: false, type: String })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  findAll(
    @Query('key') key?: string,
    @Query('tag') tag?: string,
    @Query('featured') featured?: string,
    @Query('status') status?: string,
    @Query('literarySlug') literarySlug?: string,
    @Query('author') author?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('sortBy') sortBy?: string,
  ) {
    return this.postService.findAll({
      skip: (+page - 1 || 0) * (+limit || 3),
      take: +limit || 3,
      orderBy: {
        [sortBy || 'postId']: 'desc',
      },
      where: {
        title: {
          contains: key,
        },
        featured: featured && featured === 'true',
        status: status?.toUpperCase(),
        postLiterary: { slug: literarySlug },
        createdByUser: { slug: author },
        postTag: tag && {
          some: {
            tag: {
              tagName: tag,
            },
          },
        },
      },
    });
  }
  @Public()
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.postService.findOne(slug);
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }
  @Roles(user_role.VIEWER, user_role.SUPERADMIN, user_role.ADMIN)
  @Put(':id/publish')
  publish(@Param('id') id: string, @Req() req: Request) {
    return this.postService.updateStatus(
      +id,
      req.body['updatedBy'],
      req.body['updatedBy'],
      post_status.PUBLISHED,
    );
  }
  @Put(':id/hide')
  hide(@Param('id') id: string, @Req() req: Request) {
    return this.postService.updateStatus(
      +id,
      req.body['updatedBy'],
      null,
      post_status.HIDE,
    );
  }
  @Put(':id/request-publish')
  requestPublish(@Param('id') id: string, @Req() req: Request) {
    return this.postService.updateStatus(
      +id,
      req.body['updatedBy'],
      null,
      post_status.PENDING,
    );
  }
  @Put(':slug/reaction/:type') //type  == like, dislike
  like(
    @Param('slug') slug: string,
    @Param('type') type: postReaction_type,
    @Req() req: Request,
  ) {
    return this.postService.reaction(slug, +req.body.updatedBy, type);
  }

  @Put(':slug/view')
  view(@Param('slug') slug: string, @Req() req: Request) {
    return this.postService.countView(slug);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
