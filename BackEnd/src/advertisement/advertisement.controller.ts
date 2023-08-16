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
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/auth/public.decorator';
import { Roles } from 'src/auth/roles.decorator';
import { AdvertisementService } from './advertisement.service';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
@ApiTags('advertisement')
@Controller('advertisement')
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) {}

  @Post()
  @Roles('ADMIN', 'SUPERADMIN')
  create(@Body() createAdvertisementDto: CreateAdvertisementDto) {
    return this.advertisementService.create(createAdvertisementDto);
  }

  @Get()
  @ApiQuery({ name: 'key', required: false, type: String })
  @ApiQuery({ name: 'visibility', required: false, type: Boolean })
  @ApiQuery({ name: 'display', required: false, type: Boolean })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'sortBy', required: false, type: String })
  findAll(
    @Query('key') key?: string,
    @Query('visibility') visibility?: string,
    @Query('display') display?: string,
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
        // visibility: visibility && visibility === 'true',
        visibility: display && display === 'true',
        AND: display && [
          {
            startDate: {
              lte: new Date(), // Start date is less than or equal to the current date
            },
          },
          {
            endDate: {
              gte: new Date(), // End date is greater than or equal to the current date
            },
          },
        ],
      },
    });
  }

  @Public()
  @Get('/client/:position')
  @ApiParam({ name: 'position', required: false, type: String })
  findClient(@Param('position') position?: string) {
    return this.advertisementService.findClient(position);
  }
  @Public()
  @Put(':id')
  click(@Param('id') id: string) {
    return this.advertisementService.click(+id);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advertisementService.findOne(+id);
  }

  @Patch(':id')
  @Roles('ADMIN', 'SUPERADMIN')
  update(
    @Param('id') id: string,
    @Body() updateAdvertisementDto: UpdateAdvertisementDto,
  ) {
    return this.advertisementService.update(+id, updateAdvertisementDto);
  }

  @Delete(':id')
  @Roles('ADMIN', 'SUPERADMIN')
  remove(@Param('id') id: string) {
    return this.advertisementService.remove(+id);
  }
}
