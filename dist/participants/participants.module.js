"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantsModule = void 0;
const common_1 = require("@nestjs/common");
const participants_service_1 = require("./participants.service");
const participants_resolver_1 = require("./participants.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const participants_entity_1 = require("./enitities/participants.entity");
let ParticipantsModule = class ParticipantsModule {
};
ParticipantsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([participants_entity_1.Participant])],
        providers: [participants_service_1.ParticipantsService, participants_resolver_1.ParticipantsResolver],
    })
], ParticipantsModule);
exports.ParticipantsModule = ParticipantsModule;
//# sourceMappingURL=participants.module.js.map