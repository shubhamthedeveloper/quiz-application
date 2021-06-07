import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOptionDto } from './dto/option.dto';
import { Option } from './entities/option.entity';
import { Repository } from 'typeorm';
import { ErrorCode } from '../common/exceptions';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private optRepository: Repository<Option>,
  ) {}

  // create MCQ questions
  async createOption(createOptionDto: CreateOptionDto): Promise<Option> {
    return this.optRepository.save(createOptionDto);
  }

  // get all question options
  async getOpt(id: number): Promise<Option[]> {
    return this.optRepository.find({ where: { ques_id: id } });
  }

  // search option by id
  async getOptById(id: number): Promise<Option> {
    return this.optRepository.findOne({ where: { id } });
  }

  // update option status
  async updateOptStatus(id: number, status: boolean): Promise<Option> {
    const opt = await this.getOptById(id);
    if (!opt) {
      throw new NotFoundException('No Option for this Id', ErrorCode.NOT_PRESENT);
    }
    opt.is_active = status;
    return this.optRepository.save(opt);
  }
}
