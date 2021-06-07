"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerRepository = void 0;
const typeorm_1 = require("typeorm");
const answers_entity_1 = require("../entities/answers.entity");
let AnswerRepository = class AnswerRepository extends typeorm_1.Repository {
    async createAns(createAnsDto) {
        const { ques_id, opt_id, part_id } = createAnsDto;
        const ans = new answers_entity_1.Answer();
        ans.ques_id = ques_id;
        ans.opt_id = opt_id;
        ans.part_id = part_id;
        await ans.save();
        return ans;
    }
};
AnswerRepository = __decorate([
    typeorm_1.EntityRepository(answers_entity_1.Answer)
], AnswerRepository);
exports.AnswerRepository = AnswerRepository;
//# sourceMappingURL=answers.repository.js.map