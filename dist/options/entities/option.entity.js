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
exports.Option = void 0;
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("../../common/BaseEntity");
const question_entity_1 = require("../../questions/entities/question.entity");
const answers_entity_1 = require("../../answers/entities/answers.entity");
let Option = class Option extends BaseEntity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Option.prototype, "opt_text", void 0);
__decorate([
    typeorm_1.Column({ default: true }),
    __metadata("design:type", Boolean)
], Option.prototype, "is_active", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], Option.prototype, "is_correct", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Option.prototype, "ques_id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => question_entity_1.Question, (ques) => ques.option),
    typeorm_1.JoinColumn({ name: 'ques_id' }),
    __metadata("design:type", question_entity_1.Question)
], Option.prototype, "ques", void 0);
Option = __decorate([
    typeorm_1.Entity('options')
], Option);
exports.Option = Option;
//# sourceMappingURL=option.entity.js.map