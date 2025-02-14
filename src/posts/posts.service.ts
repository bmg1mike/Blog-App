import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UsersService } from 'src/users/users.service';
import { TagService } from 'src/tag/tag.service';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    private readonly userService: UsersService,
    private readonly tagService: TagService,
  ) {}

  public async createPost(request: CreatePostDto) {
    const user = await this.userService.findOne(request.authorId);
    const tags = await this.tagService.findTags(request.tags);
    let post = this.postRepository.create({ ...request, author: user, tags });
    post = await this.postRepository.save(post);
    return post;
  }

  public async deletePost(id: number) {
    const post = await this.postRepository.delete(id);
    return post.affected === 1 ? 'Post deleted successfully' : 'Post not found';
  }

  public async getPost(id: number) {
    return await this.postRepository.findOneBy({ id });
  }

  public async updatePost(request: UpdatePostDto) {
    const tags = await this.tagService.findTags(request.tags);
    const post = await this.postRepository.findOneBy({ id: request.id });

    post.title = request.title ?? post.title;
    post.content = request.content ?? post.content;
    post.status = request.status ?? post.status;
    post.postType = request.postType ?? post.postType;
    post.slug = request.slug ?? post.slug;
    post.featuredImageUrl = request.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = request.publishOn ?? post.publishOn;
    post.tags = tags ?? post.tags;

    return await this.postRepository.save(post);
  }
}
