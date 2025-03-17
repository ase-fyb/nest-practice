import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SqsService } from './sqs.service';
import { CreateSqDto } from './dto/create-sq.dto';
import { UpdateSqDto } from './dto/update-sq.dto';

@Controller('sqs')
export class SqsController {
  constructor(private readonly sqsService: SqsService) {}

  @Post()
  create(@Body() createSqDto: CreateSqDto) {
    return this.sqsService.create(createSqDto);
  }

  @Get()
  findAll() {
    return this.sqsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sqsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSqDto: UpdateSqDto) {
    return this.sqsService.update(+id, updateSqDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sqsService.remove(+id);
  }
}
