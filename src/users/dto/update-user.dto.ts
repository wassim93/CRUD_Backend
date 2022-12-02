import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'required' })
  readonly id: string;
  @ApiProperty({ required: true })
  readonly name: string;
  @ApiProperty({ required: false })
  readonly age: number;
  @ApiProperty({ required: false })
  readonly breed: string;
}
