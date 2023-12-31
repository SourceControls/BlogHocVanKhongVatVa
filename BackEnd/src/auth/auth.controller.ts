import {
  Body,
  Controller,
  Post,
  Query,
  Req,
  Request,
  Response,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
import { SignUpDto } from './dto/signUp.dto';
import { Public } from './public.decorator';
import { Response as Res } from 'express';
import { ApiTags } from '@nestjs/swagger';
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @Post('sign-in')
  signIn(@Body() dto: SignInDto, @Response() res: Res) {
    return this.authService.signIn(dto, res);
  }

  @Public()
  @Post('sign-up')
  signUp(@Body() dto: SignUpDto) {
    return this.authService.signUp(dto);
  }
  @Public()
  @Post('forgot-password')
  forgotPassword(@Body() body) {
    return this.authService.forgotPassword(body.email);
  }
  @Post('change-password')
  changePassword(@Request() req) {
    return this.authService.changePassword(
      req['authUser'].userId,
      req.body.password,
      req.body.newPassword,
    );
  }
  @Public()
  @Post('change-password-case-forgot')
  changePasswordCaseForgot(@Body() body) {
    return this.authService.changePasswordCaseForgot(
      body.token,
      body.newPassword,
    );
  }
}
