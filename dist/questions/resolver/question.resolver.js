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
exports.QuesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const question_type_1 = require("../type/question-type");
const create_question_dto_1 = require("../dto/create-question.dto");
const ques_service_1 = require("../service/ques.service");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../user/auth-guard");
let QuesResolver = class QuesResolver {
    constructor(quesService) {
        this.quesService = quesService;
    }
    createQues(createQuesDto) {
        return this.quesService.createQues(createQuesDto);
    }
    getQues(quiz_id) {
        return this.quesService.getques(quiz_id);
    }
    updateQues(id, status) {
        return this.quesService.updateQuesStatus(id, status);
    }
};
__decorate([
    graphql_1.Mutation(() => question_type_1.QuesType),
    __param(0, graphql_1.Args('createQuesDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_question_dto_1.CreateQuesDto]),
    __metadata("design:returntype", void 0)
], QuesResolver.prototype, "createQues", null);
__decorate([
    graphql_1.Query(() => [question_type_1.QuesType]),
    __param(0, graphql_1.Args('quiz_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], QuesResolver.prototype, "getQues", null);
__decorate([
    graphql_1.Mutation(() => question_type_1.QuesType),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", void 0)
], QuesResolver.prototype, "updateQues", null);
QuesResolver = __decorate([
    graphql_1.Resolver(question_type_1.QuesType),
    common_1.UseGuards(auth_guard_1.GqlAuthGuard),
    __metadata("design:paramtypes", [ques_service_1.QuesService])
], QuesResolver);
exports.QuesResolver = QuesResolver;
//# sourceMappingURL=question.resolver.js.map