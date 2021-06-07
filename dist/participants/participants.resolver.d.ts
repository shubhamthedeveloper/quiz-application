import { CreatePartDto } from './dto/participants.dto';
import { ParticipantsService } from './participants.service';
import { User } from '../user/entities/user.entities';
export declare class ParticipantsResolver {
    private partService;
    constructor(partService: ParticipantsService);
    createParticipant(createPartDto: CreatePartDto, user: User): Promise<import("./enitities/participants.entity").Participant>;
    getParticipant(quiz_id: number): Promise<import("./enitities/participants.entity").Participant[]>;
    getParticipantByUserId(id: number): Promise<import("./enitities/participants.entity").Participant>;
}
