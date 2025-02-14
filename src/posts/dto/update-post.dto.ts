import { CreatePostDto } from './create-post.dto';
import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ example: 1, description: 'Post ID' })
  id: number;
}
