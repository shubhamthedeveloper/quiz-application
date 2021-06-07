import { CreatePartDto } from '../dto/participants.dto';
import { ParticipantsService } from '../service/participants.service';
export declare class ParticipantsResolver {
    private partService;
    constructor(partService: ParticipantsService);
    createParticipant(createPartDto: CreatePartDto): Promise<import("../enitities/participants.entity").Participant>;
    getParticipant(quiz_id: number): Promise<import("../enitities/participants.entity").Participant[]>;
    getParticipantByUserId(id: number): Promise<import("../enitities/participants.entity").Participant>;
}
