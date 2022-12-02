import { Injectable } from '@nestjs/common';
import { CreateChangeDto } from './dto/create-change.dto';
import { UpdateChangeDto } from './dto/update-change.dto';

@Injectable()
export class ChangeService {
  create(createChangeDto: CreateChangeDto) {
    return 'This action adds a new change';
  }

  findAll() {
    return `This action returns all change`;
  }

  findOne(id: number) {
    return `This action returns a #${id} change`;
  }

  update(id: number, updateChangeDto: UpdateChangeDto) {
    return `This action updates a #${id} change`;
  }

  remove(id: number) {
    return `This action removes a #${id} change`;
  }
}
