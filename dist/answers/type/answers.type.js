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
exports.AnswerType = void 0;
const graphql_1 = require("@nestjs/graphql");
let AnswerType = class AnswerType {
};
__decorate([
    graphql_1.Field((type) => graphql_1.Int),
    __metadata("design:type", Number)
], AnswerType.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], AnswerType.prototype, "ques_id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], AnswerType.prototype, "opt_id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], AnswerType.prototype, "part_id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Boolean)
], AnswerType.prototype, "is_correct", void 0);
AnswerType = __decorate([
    graphql_1.ObjectType('Answer')
], AnswerType);
exports.AnswerType = AnswerType;
//# sourceMappingURL=answers.type.js.map