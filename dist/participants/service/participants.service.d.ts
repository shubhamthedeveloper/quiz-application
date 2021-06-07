import { CreatePartDto } from '../dto/participants.dto';
import { Participant } from '../enitities/participants.entity';
import { Repository } from 'typeorm';
export declare class ParticipantsService {
    private partRepository;
    constructor(partRepository: Repository<Participant>);
    createPart(createPartDto: CreatePartDto): Promise<Participant>;
    getPart(id: number): Promise<Participant[]>;
    getPartById(id: number): Promise<Participant>;
}
