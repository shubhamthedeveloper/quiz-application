import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePartDto } from './dto/participants.dto';
import { Participant } from './enitities/participants.entity';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entities';

@Injectable()
export class ParticipantsService {
  constructor(
    @InjectRepository(Participant)
    private partRepository: Repository<Participant>,
  ) {}

  async createPart(
    createPartDto: CreatePartDto,
    user: User,
  ): Promise<Participant> {
    return this.partRepository.save({
      ...createPartDto,
      user_id: user.id,
    });
  }

  async getPart(id: number): Promise<Participant[]> {
    return this.partRepository.find({ where: { quiz_id: id } });
  }

  async getPartById(id: number): Promise<Participant> {
    return this.partRepository.findOne({ where: { user_id: id } });
  }
}
