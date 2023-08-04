import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MailerService } from './mailer.service';

@Module({
  imports: [PrismaModule],
  exports: [MailerService],
  providers: [MailerService],
})
export class MailerModule {}
