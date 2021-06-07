import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Answer } from './entities/answers.entity';
import { CreateAnsDto } from './dto/answers.dto';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entities';
import { ErrorCode } from '../common/exceptions';
import { Option } from 'src/options/entities/option.entity';
import { Role } from '../user/entities/user-role.enum';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(Answer)
    private ansRepository: Repository<Answer>,
  ) {}

  async submitAns(createAnsDto: CreateAnsDto): Promise<Answer> {
    if (
      await this.ansRepository.find({
        where: { part_id: createAnsDto.part_id, ques_id: createAnsDto.ques_id },
      })
    ) {
      throw new UnauthorizedException(
        'invalid data passed',
        ErrorCode.ACCESS_DENIED,
      );
    }
    const answer = await this.ansRepository.save({
      ...createAnsDto,
    });

    const ans = await this.ansRepository
      .createQueryBuilder()
      .select('option.is_correct')
      .from(Option, 'option')
      .innerJoinAndSelect(Answer, 'answer', 'answer.opt_id = option.id')
      .getOne();

    await this.ansRepository.update(
      { opt_id: createAnsDto.opt_id },
      { is_correct: ans.is_correct },
    );
    return answer;
  }

  async getUserAns(id: number): Promise<Answer[]> {
    return this.ansRepository.find({ where: { part_id: id } });
  }
}
