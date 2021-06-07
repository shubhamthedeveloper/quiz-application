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
exports.QuizResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const quiz_type_1 = require("./type/quiz.type");
const quiz_service_1 = require("./quiz.service");
const create_quiz_dto_1 = require("./dto/create-quiz.dto");
const auth_guard_1 = require("../common/auth-guard");
const user_entities_1 = require("../user/entities/user.entities");
const get_user_decorator_1 = require("../user/get-user.decorator");
const role_guard_1 = require("../common/role.guard");
const user_role_enum_1 = require("../user/entities/user-role.enum");
const roles_decorator_1 = require("../common/roles.decorator");
let QuizResolver = class QuizResolver {
    constructor(quizService) {
        this.quizService = quizService;
    }
    createQuiz(createQuizDto, user) {
        return this.quizService.createQuiz(createQuizDto, user);
    }
    getQuiz() {
        return this.quizService.getQuiz();
    }
};
__decorate([
    common_1.UseGuards(role_guard_1.RolesGuard),
    roles_decorator_1.Roles(user_role_enum_1.Role.ADMIN),
    graphql_1.Mutation(() => quiz_type_1.QuizType),
    __param(0, graphql_1.Args('createQuizDto')),
    __param(1, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_quiz_dto_1.CreateQuizDto,
        user_entities_1.User]),
    __metadata("design:returntype", void 0)
], QuizResolver.prototype, "createQuiz", null);
__decorate([
    graphql_1.Query(() => [quiz_type_1.QuizType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuizResolver.prototype, "getQuiz", null);
QuizResolver = __decorate([
    graphql_1.Resolver('QuizType'),
    common_1.UseGuards(auth_guard_1.GqlAuthGuard),
    __metadata("design:paramtypes", [quiz_service_1.QuizService])
], QuizResolver);
exports.QuizResolver = QuizResolver;
//# sourceMappingURL=quiz.resolver.js.map