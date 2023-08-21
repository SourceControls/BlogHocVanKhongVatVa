import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
export interface UserCountByMonth {
  month: number;
  userCount: number;
}
@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}
  async countNewRegisterUser(year: number) {
    const result: UserCountByMonth[] = await this.prisma.$queryRaw`
    SELECT
            EXTRACT(MONTH FROM createdAt) AS month,
            COUNT(userId) AS userCount
          FROM
            user
          WHERE
            EXTRACT(YEAR FROM createdAt) = ${year}
          GROUP BY
            EXTRACT(MONTH FROM createdAt)
          ORDER BY
            month;
        `;

    const userCountsArray = Array.from({ length: 12 }, (_, i) => {
      const month = i + 1;
      const matchingEntry = result.find((entry) => entry.month === month);
      return matchingEntry ? Number(matchingEntry.userCount) : 0;
    });
    return userCountsArray;
  }
  async countUserGroupByRole() {
    let result = await this.prisma.user.groupBy({
      by: ['role'],
      _count: true,
      orderBy: {
        _count: {
          role: 'asc',
        },
      },
    });
    return result;
  }
  async countPostReaction() {
    let result = await this.prisma.post.aggregate({
      _sum: {
        view: true,
        likeCount: true,
        dislikeCount: true,
      },
    });
    const comment = await this.prisma.comment.count();
    const tag = await this.prisma.tag.count();

    return { ...result._sum, comment, tag };
  }
  async countPostGroupByStatus() {
    let result = await this.prisma.post.groupBy({
      by: ['status'],
      _count: true,
    });

    return result;
  }
  async findAll(year: number) {
    const data = {
      post: {
        classify: await this.countPostGroupByStatus(),
        reaction: await this.countPostReaction(),
      },
      user: {
        //array of 12 month
        newRegister: await this.countNewRegisterUser(year),
        groupByRole: await this.countUserGroupByRole(),
      },
    };
    return { data };
  }
}
