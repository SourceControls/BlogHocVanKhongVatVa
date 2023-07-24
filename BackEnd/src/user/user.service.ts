import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(data: string | number) {
    try {
      const query =
        typeof data === 'number' ? { userId: data } : { email: data };
      const user = await this.prisma.user.findUnique({
        where: {
          ...query,
        },
      });
      delete user.password;
      return { data: user };
    } catch (error) {
      throw new ForbiddenException(error.message);
    }
  }

  async update(userId: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.prisma.user.update({
        data: updateUserDto,
        where: { userId: userId },
      });
      delete user.password;
      return { data: user };
    } catch (error) {
      throw new ForbiddenException(error.message);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
