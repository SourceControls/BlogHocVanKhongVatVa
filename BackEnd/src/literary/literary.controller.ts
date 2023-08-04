import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { LiteraryService } from './literary.service';
import { CreateLiteraryDto } from './dto/create-literary.dto';
import { UpdateLiteraryDto } from './dto/update-literary.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/public.decorator';
import { user_role } from '@prisma/client';
import { Roles } from 'src/auth/roles.decorator';

@ApiTags('literary')
@Controller('literary')
export class LiteraryController {
  constructor(private readonly literaryService: LiteraryService) {}

  @Post()
  @Roles('ADMIN', 'SUPERADMIN')
  create(@Body() createLiteraryDto: CreateLiteraryDto) {
    return this.literaryService.create(createLiteraryDto);
  }
  @Public()
  @Get()
  @ApiQuery({ name: 'key', required: false, type: String })
  @ApiQuery({ name: 'visibility', required: false, type: Boolean })
  @ApiQuery({ name: 'featured', required: false, type: Boolean })
  @ApiQuery({ name: 'categorySlug', required: false, type: String })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  findAll(
    @Query('key') key?: string,
    @Query('visibility') visibility?: string,
    @Query('featured') featured?: string,
    @Query('categorySlug') categorySlug?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('sortBy') sortBy?: string,
  ) {
    return this.literaryService.findAll({
      skip: (+page - 1 || 0) * (+limit || 3),
      take: +limit || 3,
      orderBy: {
        [sortBy || 'literaryId']: 'desc',
      },
      where: {
        OR: key && [
          {
            title: {
              contains: key,
            },
          },
          {
            summary: {
              contains: key,
            },
          },
          {
            authorName: {
              contains: key,
            },
          },
          {
            intro: {
              contains: key,
            },
          },
        ],
        visibility: visibility && visibility === 'true',
        featured: featured && featured === 'true',
        literaryCategory: categorySlug && {
          some: {
            category: {
              slug: categorySlug,
            },
          },
        },
      },
    });
  }
  @Public()
  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.literaryService.findOne(slug);
  }
  @Public()
  @Put(':slug/count-view')
  countView(@Param('slug') slug: string) {
    return this.literaryService.countView(slug);
  }

  @Patch(':id')
  @Roles('ADMIN', 'SUPERADMIN')
  update(
    @Param('id') id: string,
    @Body() updateLiteraryDto: UpdateLiteraryDto,
  ) {
    console.log(updateLiteraryDto);
    console.log(1);

    return this.literaryService.update(+id, updateLiteraryDto);
  }
  @Roles('ADMIN', 'SUPERADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.literaryService.remove(+id);
  }
}
