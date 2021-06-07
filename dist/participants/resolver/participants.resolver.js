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
exports.ParticipantsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const participants_type_1 = require("../type/participants.type");
const participants_dto_1 = require("../dto/participants.dto");
const participants_service_1 = require("../service/participants.service");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../user/auth-guard");
let ParticipantsResolver = class ParticipantsResolver {
    constructor(partService) {
        this.partService = partService;
    }
    createParticipant(createPartDto) {
        return this.partService.createPart(createPartDto);
    }
    getParticipant(quiz_id) {
        return this.partService.getPart(quiz_id);
    }
    getParticipantByUserId(id) {
        return this.partService.getPartById(id);
    }
};
__decorate([
    graphql_1.Mutation(() => participants_type_1.PartType),
    __param(0, graphql_1.Args('createPartDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [participants_dto_1.CreatePartDto]),
    __metadata("design:returntype", void 0)
], ParticipantsResolver.prototype, "createParticipant", null);
__decorate([
    graphql_1.Query(() => [participants_type_1.PartType]),
    __param(0, graphql_1.Args('quiz_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ParticipantsResolver.prototype, "getParticipant", null);
__decorate([
    graphql_1.Query(() => participants_type_1.PartType),
    __param(0, graphql_1.Args('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ParticipantsResolver.prototype, "getParticipantByUserId", null);
ParticipantsResolver = __decorate([
    graphql_1.Resolver(participants_type_1.PartType),
    common_1.UseGuards(auth_guard_1.GqlAuthGuard),
    __metadata("design:paramtypes", [participants_service_1.ParticipantsService])
], ParticipantsResolver);
exports.ParticipantsResolver = ParticipantsResolver;
//# sourceMappingURL=participants.resolver.js.map