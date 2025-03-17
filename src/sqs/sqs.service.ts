import { Injectable } from '@nestjs/common';
import { CreateSqDto } from './dto/create-sq.dto';
import { UpdateSqDto } from './dto/update-sq.dto';

@Injectable()
export class SqsService {
  create(createSqDto: CreateSqDto) {
    return 'This action adds a new sq';
  }

  findAll() {
    return `This action returns all sqs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sq`;
  }

  update(id: number, updateSqDto: UpdateSqDto) {
    return `This action updates a #${id} sq`;
  }

  remove(id: number) {
    return `This action removes a #${id} sq`;
  }
}
