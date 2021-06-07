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
exports.Answer = void 0;
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("../../common/BaseEntity");
const option_entity_1 = require("../../options/entities/option.entity");
let Answer = class Answer extends BaseEntity_1.BaseEntity {
};
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Answer.prototype, "part_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Answer.prototype, "ques_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Answer.prototype, "opt_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Answer.prototype, "is_correct", void 0);
__decorate([
    typeorm_1.OneToOne(() => option_entity_1.Option),
    typeorm_1.JoinColumn({ name: 'opt_id' }),
    __metadata("design:type", option_entity_1.Option)
], Answer.prototype, "option", void 0);
Answer = __decorate([
    typeorm_1.Entity('answers')
], Answer);
exports.Answer = Answer;
//# sourceMappingURL=answers.entity.js.map