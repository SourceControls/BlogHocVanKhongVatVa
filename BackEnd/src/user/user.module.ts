import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
  imports: [PrismaModule, MailerModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
