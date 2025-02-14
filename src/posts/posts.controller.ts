import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  public getPosts(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.getPost(id);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The post has been successfully created.',
    example: 'create post',
  })
  public createPost(@Body() request: CreatePostDto) {
    return this.postsService.createPost(request);
  }

  @Patch()
  public updatePost(@Body() request: UpdatePostDto) {
    return this.postsService.updatePost(request);
  }

  @Delete()
  @ApiOperation({ summary: 'Delete post' })
  public deletePost(@Query('id', ParseIntPipe) id: number) {
    return this.postsService.deletePost(id);
  }
}
