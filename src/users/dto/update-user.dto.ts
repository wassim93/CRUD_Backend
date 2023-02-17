import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'required' })
  readonly id: string;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly age: number;
  @ApiProperty()
  readonly breed: string;
}
