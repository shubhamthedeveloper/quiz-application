"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const participants_entity_1 = require("./enitities/participants.entity");
const typeorm_2 = require("typeorm");
let ParticipantsService = class ParticipantsService {
    constructor(partRepository) {
        this.partRepository = partRepository;
    }
    async createPart(createPartDto, user) {
        return this.partRepository.save(Object.assign(Object.assign({}, createPartDto), { user_id: user.id }));
    }
    async getPart(id) {
        return this.partRepository.find({ where: { quiz_id: id } });
    }
    async getPartById(id) {
        return this.partRepository.findOne({ where: { user_id: id } });
    }
};
ParticipantsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(participants_entity_1.Participant)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ParticipantsService);
exports.ParticipantsService = ParticipantsService;
//# sourceMappingURL=participants.service.js.map