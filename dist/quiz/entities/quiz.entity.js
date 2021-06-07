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
exports.Quiz = void 0;
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("../../common/BaseEntity");
const participants_entity_1 = require("../../participants/enitities/participants.entity");
const question_entity_1 = require("../../questions/entities/question.entity");
const user_entities_1 = require("../../user/entities/user.entities");
let Quiz = class Quiz extends BaseEntity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Quiz.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Quiz.prototype, "created_by", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entities_1.User, (user) => user.quiz),
    typeorm_1.JoinColumn({ name: 'created_by' }),
    __metadata("design:type", user_entities_1.User)
], Quiz.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(() => participants_entity_1.Participant, (participants) => participants.quizes),
    __metadata("design:type", Array)
], Quiz.prototype, "participants", void 0);
__decorate([
    typeorm_1.OneToMany(() => question_entity_1.Question, (questions) => questions.quiz),
    __metadata("design:type", Array)
], Quiz.prototype, "questions", void 0);
Quiz = __decorate([
    typeorm_1.Entity('quizes')
], Quiz);
exports.Quiz = Quiz;
//# sourceMappingURL=quiz.entity.js.map