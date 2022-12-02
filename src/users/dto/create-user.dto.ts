import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: true })
  // @IsEmail({}, { message: 'kjhjkh' })
  //@IsNotEmpty({ message: 'required' })
  readonly name: string;
  @ApiProperty({ required: false })
  readonly age: number;
  @ApiProperty({ required: false })
  readonly breed: string;
}
