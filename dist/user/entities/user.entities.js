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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const user_role_enum_1 = require("./user-role.enum");
const participants_entity_1 = require("../../participants/enitities/participants.entity");
const BaseEntity_1 = require("../../common/BaseEntity");
const question_entity_1 = require("../../questions/entities/question.entity");
const quiz_entity_1 = require("../../quiz/entities/quiz.entity");
let User = class User extends BaseEntity_1.BaseEntity {
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }
    async validatePassword(password) {
        const match = await bcrypt.compare(password, this.password);
        return match;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "emailToLowerCase", null);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "is_active", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    typeorm_1.OneToOne(() => participants_entity_1.Participant, (participants) => participants.users),
    __metadata("design:type", participants_entity_1.Participant)
], User.prototype, "participants", void 0);
__decorate([
    typeorm_1.OneToMany(() => question_entity_1.Question, (question) => question.user),
    __metadata("design:type", Array)
], User.prototype, "questions", void 0);
__decorate([
    typeorm_1.OneToMany(() => quiz_entity_1.Quiz, (quiz) => quiz.user),
    __metadata("design:type", Array)
], User.prototype, "quiz", void 0);
User = __decorate([
    typeorm_1.Entity('users'),
    typeorm_1.Unique(['username'])
], User);
exports.User = User;
//# sourceMappingURL=user.entities.js.map