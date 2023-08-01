import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from './public.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}
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
    // const token = this.extractTokenFromHeader(request);
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImVtYWlsIjoidHVhbmh1bmc1OTIwMDFAZ21haWwuY29tIiwicm9sZXMiOlsiVklFV0VSIl0sImlhdCI6MTY5MDYyNzA2MCwiZXhwIjoxNjkyNzAwNjYwfQ.Nn0rrqV6JApanOq2KdnQLgIEvI9uhLiDIVTgKwj3loY';
    if (!token) {
      throw new UnauthorizedException('Token không hợp lệ!');
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      console.log(payload.email, ' || ', request.method, ' || ', request.url);
      request['authUser'] = payload;
      if (request.method == 'POST') request.body.createdBy = payload.userId;
      else if (['PUT', 'PATCH', 'DELETE'].includes(request.method))
        request.body.updatedBy = payload.userId;
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
