import { Module } from '@nestjs/common';
import { LiteraryService } from './literary.service';
import { LiteraryController } from './literary.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LiteraryController],
  providers: [LiteraryService],
})
export class LiteraryModule {}
