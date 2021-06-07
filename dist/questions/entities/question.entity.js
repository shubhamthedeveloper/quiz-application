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
exports.Question = void 0;
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("../../common/BaseEntity");
const user_entities_1 = require("../../user/entities/user.entities");
const quiz_entity_1 = require("../../quiz/entities/quiz.entity");
const option_entity_1 = require("../../options/entities/option.entity");
let Question = class Question extends BaseEntity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Question.prototype, "ques_text", void 0);
__decorate([
    typeorm_1.Column({ default: true }),
    __metadata("design:type", Boolean)
], Question.prototype, "is_active", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Question.prototype, "quiz_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Question.prototype, "created_by", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entities_1.User, (user) => user.questions),
    typeorm_1.JoinColumn({ name: 'created_by' }),
    __metadata("design:type", user_entities_1.User)
], Question.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(() => quiz_entity_1.Quiz, (quiz) => quiz.questions),
    typeorm_1.JoinColumn({ name: 'quiz_id' }),
    __metadata("design:type", quiz_entity_1.Quiz)
], Question.prototype, "quiz", void 0);
__decorate([
    typeorm_1.OneToMany(() => option_entity_1.Option, (option) => option.ques),
    __metadata("design:type", Array)
], Question.prototype, "option", void 0);
Question = __decorate([
    typeorm_1.Entity()
], Question);
exports.Question = Question;
//# sourceMappingURL=question.entity.js.map