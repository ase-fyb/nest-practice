import { PartialType } from '@nestjs/mapped-types';
import { CreateSqDto } from './create-sq.dto';

export class UpdateSqDto extends PartialType(CreateSqDto) {}
