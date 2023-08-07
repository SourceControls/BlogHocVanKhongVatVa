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
import { MailerService } from 'src/mailer/mailer.service';
@Controller('post')
@ApiTags('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private mailer: MailerService,
  ) {}

  @Public()
  @Get()
  @ApiQuery({ name: 'key', required: false, type: String })
  @ApiQuery({ name: 'tag', required: false, type: String })
  @ApiQuery({ name: 'featured', required: false, type: Boolean })
  @ApiQuery({ name: 'literarySlug', required: false, type: String })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  clientFindAll(
    @Query('key') key?: string,
    @Query('tag') tag?: string,
    @Query('featured') featured?: string,
    @Query('literarySlug') literarySlug?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('sortBy') sortBy?: string,
  ) {
    let orderBy = {};
    if (key && !sortBy)
      orderBy = {
        _relevance: {
          fields: ['title', 'summary'],
          search: key,
          sort: 'desc',
        },
      };
    else orderBy = { [sortBy || 'postId']: 'desc' };
    return this.postService.findAll({
      skip: (+page - 1 || 0) * (+limit || 3),
      take: +limit || 3,
      orderBy,
      where: {
        featured: featured && featured === 'true',
        status: 'PUBLISHED',
        postLiterary: { slug: literarySlug },
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

  @Get('admin')
  @Roles('CONTRIBUTOR', 'ADMIN', 'SUPERADMIN')
  @ApiQuery({ name: 'key', required: false, type: String })
  @ApiQuery({ name: 'tag', required: false, type: String })
  @ApiQuery({ name: 'featured', required: false, type: Boolean })
  @ApiQuery({ name: 'status', required: false, enum: post_status })
  @ApiQuery({ name: 'literarySlug', required: false, type: String })
  @ApiQuery({ name: 'userSlug', required: false, type: String })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  adminFindAll(
    @Req() req: Request,
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
    // console.log(request.headers.referer);  //http://localhost:3001/home

    //call from admin page, then rs will check role to return rs
    //không thể thấy được thư mục draft của
    if (req['authUser'].role === 'CONTRIBUTOR') {
      author = req['authUser'].slug;
    }

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
  @Roles('CONTRIBUTOR', 'ADMIN', 'SUPERADMIN')
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Post('request-post')
  requestPost(@Req() req: Request) {
    return this.mailer.requestPost({ user: req['authUser'], ...req.body });
  }

  @Roles('CONTRIBUTOR', 'ADMIN', 'SUPERADMIN')
  @Put(':id/publish')
  publish(@Param('id') id: string, @Req() req: Request) {
    return this.postService.updateStatus(
      +id,
      req.body['updatedBy'],
      req.body['updatedBy'],
      post_status.PUBLISHED,
    );
  }
  @Roles('CONTRIBUTOR', 'ADMIN', 'SUPERADMIN')
  @Put(':id/hide')
  hide(@Param('id') id: string, @Req() req: Request) {
    return this.postService.updateStatus(
      +id,
      req.body['updatedBy'],
      null,
      post_status.HIDE,
    );
  }
  @Roles('CONTRIBUTOR', 'ADMIN', 'SUPERADMIN')
  @Put(':id/request-publish')
  requestPublish(@Param('id') id: string, @Req() req: Request) {
    return this.postService.updateStatus(
      +id,
      req.body['updatedBy'],
      null,
      post_status.PENDING,
    );
  }

  @Public()
  @Put(':slug/count-view')
  countView(@Param('slug') slug: string) {
    return this.postService.countView(slug);
  }

  @Put(':slug/reaction/:reactionType') //reactionType  == like, dislike
  like(
    @Param('slug') slug: string,
    @Param('reactionType') reactionType: postReaction_type,
    @Req() req: Request,
  ) {
    return this.postService.reaction(slug, +req.body.updatedBy, reactionType);
  }

  @Get(':slug/own-reaction')
  getOwnReaction(@Param('slug') slug: string, @Req() req: Request) {
    return this.postService.getOwnReaction(slug, req['authUser'].userId);
  }
  @Roles('CONTRIBUTOR', 'ADMIN', 'SUPERADMIN')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }
  @Roles('CONTRIBUTOR', 'ADMIN', 'SUPERADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
