import { Body, Controller, Post } from '@nestjs/common';
import { MetaOptionService } from './meta-option.service';
import { CreateMetaOptionDto } from './dto/create-meta-option.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('meta-option')
export class MetaOptionController {
  constructor(private readonly metaOptionService: MetaOptionService) {}

  @Post()
  @ApiOperation({
    summary: 'Create meta option',
    description: 'Create meta option',
  })
  createMetaOption(@Body() request: CreateMetaOptionDto) {
    return this.metaOptionService.createMetaOption(request);
  }
}
