import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTagDto {
  @ApiProperty({
    example: 'tag name',
    description: 'The name of the tag',
    format: 'string',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'tag-slug',
    description: 'The slug of the tag',
    format: 'string',
  })
  @IsNotEmpty()
  slug: string;

  @ApiProperty({
    example: 'tag description',
    description: 'The description of the tag',
    format: 'string',
  })
  @IsNotEmpty()
  description?: string;

  @ApiProperty({
    example: 'tag schema',
    description: 'The schema of the tag',
    format: 'string',
  })
  @IsNotEmpty()
  schema?: string;

  @ApiProperty({
    example: 'tag featured image url',
    description: 'The featured image url of the tag',
    format: 'string',
  })
  @IsNotEmpty()
  featuredImageUrl?: string;
}
