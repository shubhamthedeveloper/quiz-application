"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const question_resolver_1 = require("./question.resolver");
const ques_service_1 = require("./ques.service");
const question_entity_1 = require("./entities/question.entity");
let QuestionsModule = class QuestionsModule {
};
QuestionsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([question_entity_1.Question])],
        providers: [question_resolver_1.QuesResolver, ques_service_1.QuesService],
    })
], QuestionsModule);
exports.QuestionsModule = QuestionsModule;
//# sourceMappingURL=questions.module.js.map