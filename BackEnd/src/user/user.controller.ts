import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { user_role, user_status } from '@prisma/client';

@Controller('user')
@ApiTags('user')
// @ApiBearerAuth()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  getProfile(@Request() req) {
    return this.userService.findOne(req.authUser.id);
  }

  @Get()
  @ApiQuery({ name: 'key', required: false, type: String })
  @ApiQuery({ name: 'status', required: false, enum: user_status })
  @ApiQuery({ name: 'role', required: false, type: String })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  findAll(
    @Query('key') key?: string,
    @Query('status') status?: string,
    @Query('role') role?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.userService.findAll({
      skip: +limit == 0 ? undefined : (+page - 1 || 0) * (+limit || 3),
      take: +limit == 0 ? undefined : +limit || 3,
      orderBy: {
        userId: 'desc',
      },
      where: {
        OR: key && [
          {
            name: {
              contains: key,
            },
          },
          {
            email: {
              contains: key,
            },
          },
        ],
        status: status?.toUpperCase(),
        NOT: role == 'NOTVIEWER' ? { role: 'VIEWER' } : undefined,
        role: role && role != 'NOTVIEWER' ? role.toUpperCase() : undefined,
      },
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
