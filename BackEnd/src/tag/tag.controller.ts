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
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles.decorator';
@ApiTags('tag')
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  @Roles('ADMIN', 'SUPERADMIN')
  create(@Body() createTagDto: CreateTagDto) {
    return this.tagService.create(createTagDto);
  }

  @Get()
  @ApiQuery({ name: 'key', required: false, type: String })
  @ApiQuery({ name: 'visibility', required: false, type: Boolean })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  findAll(
    @Query('key') key?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('sortBy') sortBy?: string,
  ) {
    return this.tagService.findAll({
      skip: +limit == 0 ? undefined : (+page - 1 || 0) * (+limit || 3),
      take: +limit == 0 ? undefined : +limit || 3,
      orderBy: {
        [sortBy || 'tagId']: 'desc',
      },
      where: {
        tagName: {
          contains: key,
        },
      },
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagService.findOne(+id);
  }

  @Patch(':id')
  @Roles('ADMIN', 'SUPERADMIN')
  update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return this.tagService.update(+id, updateTagDto);
  }

  @Delete(':id')
  @Roles('ADMIN', 'SUPERADMIN')
  remove(@Param('id') id: string) {
    return this.tagService.remove(+id);
  }
}
