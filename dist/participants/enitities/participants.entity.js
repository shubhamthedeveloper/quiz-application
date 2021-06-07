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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
const typeorm_1 = require("typeorm");
const user_entities_1 = require("../../user/entities/user.entities");
const BaseEntity_1 = require("../../common/BaseEntity");
const quiz_entity_1 = require("../../quiz/entities/quiz.entity");
let Participant = class Participant extends BaseEntity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Participant.prototype, "quiz_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Participant.prototype, "user_id", void 0);
__decorate([
    typeorm_1.OneToOne(() => user_entities_1.User, (users) => users.participants),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    __metadata("design:type", user_entities_1.User)
], Participant.prototype, "users", void 0);
__decorate([
    typeorm_1.ManyToOne(() => quiz_entity_1.Quiz, (quizes) => quizes.participants),
    typeorm_1.JoinColumn({ name: 'quiz_id' }),
    __metadata("design:type", quiz_entity_1.Quiz)
], Participant.prototype, "quizes", void 0);
Participant = __decorate([
    typeorm_1.Entity('participants')
], Participant);
exports.Participant = Participant;
//# sourceMappingURL=participants.entity.js.map