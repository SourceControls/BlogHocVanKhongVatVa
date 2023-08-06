import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { user_status } from '@prisma/client';
import { Request } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';
import { IS_PUBLIC_KEY } from './public.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    // console.log(request.headers);
    const token = this.extractTokenFromHeader(request);
    // const token =
    // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoidHVhbmh1bmc1OTIwMDFAZ21haWwuY29tIiwicm9sZXMiOlsiVklFV0VSIl0sImlhdCI6MTY5MDYyNzA2MCwiZXhwIjoxNjkyNzAwNjYwfQ.Nn0rrqV6JApanOq2KdnQLgIEvI9uhLiDIVTgKwj3loY';
    if (!token) {
      throw new UnauthorizedException('Chưa đăng nhập hoặc phiên đã hết hạn!');
    }
    try {
      const { userId, type } = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      //block forgotpassword token
      if (type === 'forgotPassword')
        throw new UnauthorizedException(
          'Chưa đăng nhập hoặc phiên đã hết hạn!',
        );

      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      const user = await this.prisma.user.findUnique({ where: { userId } });
      console.log(
        user.email,
        ' || ',
        request.method,
        ' || ',
        request.url,
        ' || ',
        user.status,
      );
      if (user.status === user_status.BANNED)
        throw new UnauthorizedException('Tài khoản đã bị cấm');

      request['authUser'] = user;
      if (request.method == 'POST') request.body.createdBy = user.userId;
      else if (['PUT', 'PATCH', 'DELETE'].includes(request.method))
        request.body.updatedBy = user.userId;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
