import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Tag } from './tag.entity';
import { CreateTagDto } from './dto/create-tag.dto';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
  ) {}

  public async createTag(request: CreateTagDto) {
    let tag = this.tagRepository.create(request);
    tag = await this.tagRepository.save(tag);
    return tag;
  }

  public async findTags(tags: number[]) {
    return await this.tagRepository.find({
      where: { id: In(tags) },
    });
  }
}
