import { Inject, Injectable, HttpException } from '@nestjs/common';
import { isValidObjectId, Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_MODEL') private readonly UserModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = this.UserModel.create(createUserDto);
    return createdUser;
  }

  async update(updateUserDto: UpdateUserDto) {
    var mongoose = require('mongoose');
    var id = mongoose.Types.ObjectId(updateUserDto.id);
    console.log('====================================');
    console.log('***************', id);
    console.log('====================================');
    return await this.UserModel.findOneAndUpdate({ _id: id }, updateUserDto);
  }

  async findAll(findUserDto: FindUserDto) {
    const findQuery = this.UserModel.find({
      name: { $regex: findUserDto.keyword, $options: 'i' },
    })
      .sort({ _id: 1 })
      .skip(findUserDto.page * findUserDto.size);

    if (findUserDto.size) {
      findQuery.limit(findUserDto.size);
    }

    const results = await findQuery;
    let count = 0;

    if (findUserDto.keyword) {
      count = results.length;
    } else {
      count = await this.UserModel.count();
    }

    return { results, count };
  }
}
