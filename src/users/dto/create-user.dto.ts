import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'John', description: 'The first name of the user' })
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
  lastName: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'john@doe.com',
    description: 'The email of the user',
  })
  email: string;

  @MinLength(8)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'Password must be 8 characters, at least one lower-case letter,at least one upper-case letter, at least one number and at least one special character',
    },
  )
  @ApiProperty({
    example: 'Password@123',
    description: 'The password of the user',
  })
  password: string;
}
