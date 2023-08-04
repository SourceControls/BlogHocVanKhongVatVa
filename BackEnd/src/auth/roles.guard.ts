import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { Reflector } from '@nestjs/core';
import { user_role } from '@prisma/client';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<user_role[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }
    const { authUser } = context.switchToHttp().getRequest();

    if (!requiredRoles.includes(authUser.role))
      throw new ForbiddenException('Không có quyền truy cập');

    return true;
  }
}
