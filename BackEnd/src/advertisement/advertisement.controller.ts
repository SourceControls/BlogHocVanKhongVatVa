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
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { AdvertisementService } from './advertisement.service';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
@ApiTags('advertisement')
@Controller('advertisement')
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) {}

  @Post()
  create(@Body() createAdvertisementDto: CreateAdvertisementDto) {
    return this.advertisementService.create(createAdvertisementDto);
  }

  @Get()
  @ApiQuery({ name: 'key', required: false, type: String })
  @ApiQuery({ name: 'visibility', required: false, type: Boolean })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  findAll(
    @Query('key') key?: string,
    @Query('visibility') visibility?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('sortBy') sortBy?: string,
  ) {
    return this.advertisementService.findAll({
      skip: (+page - 1 || 0) * (+limit || 3),
      take: +limit || 3,
      orderBy: {
        [sortBy || 'advertisementId']: 'desc',
      },
      where: {
        title: {
          contains: key,
        },
        visibility: visibility && visibility === 'true',
      },
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advertisementService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdvertisementDto: UpdateAdvertisementDto,
  ) {
    return this.advertisementService.update(+id, updateAdvertisementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.advertisementService.remove(+id);
  }
}
