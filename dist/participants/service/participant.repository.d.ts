import { Repository } from 'typeorm';
import { Participant } from '../enitities/participants.entity';
import { CreatePartDto } from '../dto/participants.dto';
export declare class ParticipantRepository extends Repository<Participant> {
    createPart(createPartDto: CreatePartDto): Promise<Participant>;
}
