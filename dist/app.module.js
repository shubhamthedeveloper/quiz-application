"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const graphql_option_1 = require("./common/graphql.option");
const user_module_1 = require("./user/user.module");
const quiz_module_1 = require("./quiz/quiz.module");
const questions_module_1 = require("./questions/questions.module");
const options_module_1 = require("./options/options.module");
const participants_module_1 = require("./participants/participants.module");
const answers_module_1 = require("./answers/answers.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            graphql_1.GraphQLModule.forRootAsync({
                useClass: graphql_option_1.GraphQlOption,
            }),
            user_module_1.UserModule,
            quiz_module_1.QuizModule,
            questions_module_1.QuestionsModule,
            options_module_1.OptionsModule,
            participants_module_1.ParticipantsModule,
            answers_module_1.AnswersModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map