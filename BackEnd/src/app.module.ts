import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { LiteraryModule } from './literary/literary.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { RemoveUndefinedQueryMiddleware } from './app.middleware';
import { TagModule } from './tag/tag.module';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { SettingModule } from './setting/setting.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PostModule,
    UserModule,
    AuthModule,
    PrismaModule,
    LiteraryModule,
    CategoryModule,
    CommentModule,
    TagModule,
    AdvertisementModule,
    SettingModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  // Sử dụng MiddlewareConsumer và RequestMethod
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RemoveUndefinedQueryMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
