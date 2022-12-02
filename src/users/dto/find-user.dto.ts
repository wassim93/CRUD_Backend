import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class FindUserDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly page: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  readonly size: number;
  @ApiProperty({ required: false })
  readonly keyword: String;
}
