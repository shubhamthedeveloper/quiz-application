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
exports.AnswersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const answers_type_1 = require("../type/answers.type");
const answers_service_1 = require("../service/answers.service");
const answers_dto_1 = require("../dto/answers.dto");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../user/auth-guard");
let AnswersResolver = class AnswersResolver {
    constructor(ansService) {
        this.ansService = ansService;
    }
    submitAns(createAnsDto) {
        return this.ansService.submitAns(createAnsDto);
    }
    getAns() {
        return this.ansService.getAns();
    }
    getUserAns(id) {
        return this.ansService.getUserAns(id);
    }
};
__decorate([
    graphql_1.Mutation(() => answers_type_1.AnswerType),
    __param(0, graphql_1.Args('createAnsDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [answers_dto_1.CreateAnsDto]),
    __metadata("design:returntype", void 0)
], AnswersResolver.prototype, "submitAns", null);
__decorate([
    graphql_1.Query(() => [answers_type_1.AnswerType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnswersResolver.prototype, "getAns", null);
__decorate([
    graphql_1.Query(() => [answers_type_1.AnswerType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AnswersResolver.prototype, "getUserAns", null);
AnswersResolver = __decorate([
    graphql_1.Resolver(answers_type_1.AnswerType),
    common_1.UseGuards(auth_guard_1.GqlAuthGuard),
    __metadata("design:paramtypes", [answers_service_1.AnswersService])
], AnswersResolver);
exports.AnswersResolver = AnswersResolver;
//# sourceMappingURL=answers.resolver.js.map