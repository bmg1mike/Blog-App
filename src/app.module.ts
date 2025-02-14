import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { TagModule } from './tag/tag.module';
import { MetaOptionModule } from './meta-option/meta-option.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: 'secret',
        database: 'nestjs-blog',
        autoLoadEntities: true,
        synchronize: true,
        entities: [User],
      }),
    }),
    TagModule,
    MetaOptionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
