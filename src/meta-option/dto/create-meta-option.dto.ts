import { ApiProperty } from '@nestjs/swagger';
import { IsJSON, IsNotEmpty } from 'class-validator';

export class CreateMetaOptionDto {
  @ApiProperty({
    description: 'Meta key',
    example: 'key',
  })
  @IsJSON()
  @IsNotEmpty()
  metaValue: string;
}
