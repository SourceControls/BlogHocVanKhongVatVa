import { ForbiddenException, Injectable, Response } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto } from './dto/signIn.dto';
import { SignUpDto } from './dto/signUp.dto';
import * as bcrypt from 'bcrypt';
import {
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt';
import { Public } from './public.decorator';
import { Response as Res } from 'express';
import { user_status } from '@prisma/client';
@Public()
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signUp(dto: SignUpDto) {
    try {
      //check user already exists
      const userAlreadyExists = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });
      if (userAlreadyExists)
        throw new ForbiddenException('Email đã có người đăng kí');
      //generate password
      const hashedPassword = await bcrypt.hash(dto.password, 10);
      //save user
      const user = await this.prisma.user.create({
        data: { ...dto, password: hashedPassword },
      });
      delete user.password;
      return { data: user, message: 'Đăng ký tài khoản thành công!' };
    } catch (error) {
      throw new ForbiddenException(error.message);
    }
  }

  async signIn(dto: SignInDto, @Response() res: Res) {
    try {
      //get account via email address
      const user = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });
      if (!user)
        throw new UnauthorizedException('Thông tin đăng nhập không chính xác!');
      //compare password
      const matchPassword = await bcrypt.compare(dto.password, user.password);
      if (!matchPassword)
        throw new UnauthorizedException('Thông tin đăng nhập không chính xác!');
      //generate token
      if (user.status === user_status.BANNED)
        throw new UnauthorizedException('Tài khoản đã bị cấm');
      const payload = {
        userId: user.userId,
      };
      const token = await this.jwtService.signAsync(payload);
      delete user.password;
      res.setHeader('Authorization', token);
      return res.json({ data: user, message: 'Hello!! ' + user.name + ' !' });
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
