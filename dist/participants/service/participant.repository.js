"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantRepository = void 0;
const typeorm_1 = require("typeorm");
const participants_entity_1 = require("../enitities/participants.entity");
let ParticipantRepository = class ParticipantRepository extends typeorm_1.Repository {
    async createPart(createPartDto) {
        const { quiz_id, user_id } = createPartDto;
        const part = new participants_entity_1.Participant();
        part.quiz_id = quiz_id;
        part.user_id = user_id;
        await part.save();
        return part;
    }
};
ParticipantRepository = __decorate([
    typeorm_1.EntityRepository(participants_entity_1.Participant)
], ParticipantRepository);
exports.ParticipantRepository = ParticipantRepository;
//# sourceMappingURL=participant.repository.js.map