import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from './meta-option.entity';
import { Repository } from 'typeorm';
import { CreateMetaOptionDto } from './dto/create-meta-option.dto';

@Injectable()
export class MetaOptionService {
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,
  ) {}

  public async createMetaOption(request: CreateMetaOptionDto) {
    let meta_options = this.metaOptionRepository.create(request);
    meta_options = await this.metaOptionRepository.save(meta_options);
    return meta_options;
  }
}
