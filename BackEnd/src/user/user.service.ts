import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const select = {
  userId: true,
  avatarImage: true,
  coverImage: true,
  website: true,
  name: true,
  slug: true,
  email: true,
  role: true,
  status: true,
  createdAt: true,
  _count: {
    select: {
      createdPosts: true,
    },
  },
};

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(query) {
    try {
      const posts = await this.prisma.user.findMany({
        ...query,
        select,
      });
      return { data: posts };
    } catch (error) {
      return { data: [], message: error.message };
    }
  }

  async findOne(data: string | number) {
    try {
      const query =
        typeof data === 'number' ? { userId: data } : { email: data };
      const user = await this.prisma.user.findUnique({
        where: query,
        select,
      });

      return { data: user };
    } catch (error) {
      throw new ForbiddenException(error.message);
    }
  }

  async update(userId: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    try {
      const user = await this.prisma.user.update({
        where: { userId: userId },
        data: updateUserDto,
        select,
      });
      return { data: user, message: 'Cập nhật thành công!' };
    } catch (error) {
      throw new ForbiddenException(error.message);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
