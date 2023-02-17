import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  HttpException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindUserDto } from './dto/find-user.dto';
import { ExceptionsLoggerFilter } from 'src/exceptions/ExceptionsLoggerFilter';

@ApiTags('Users')
@Controller('users')
@UseFilters(ExceptionsLoggerFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/add')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('/all')
  findAll(@Body() findUserDto: FindUserDto) {
    return this.usersService.findAll(findUserDto);
  }
  //  @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  @Patch('/update')
  update(@Body() updateUserDto: UpdateUserDto) {
    try {
      return this.usersService.update(updateUserDto);
    } catch (err) {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
      throw new HttpException('Post not found', 404);
    }
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
