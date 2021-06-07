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
exports.AnswersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const answers_entity_1 = require("./entities/answers.entity");
const typeorm_2 = require("typeorm");
const exceptions_1 = require("../common/exceptions");
const option_entity_1 = require("../options/entities/option.entity");
let AnswersService = class AnswersService {
    constructor(ansRepository) {
        this.ansRepository = ansRepository;
    }
    async submitAns(createAnsDto) {
        if (await this.ansRepository.find({
            where: { part_id: createAnsDto.part_id, ques_id: createAnsDto.ques_id },
        })) {
            throw new common_1.UnauthorizedException('invalid data passed', exceptions_1.ErrorCode.ACCESS_DENIED);
        }
        const answer = await this.ansRepository.save(Object.assign({}, createAnsDto));
        const ans = await this.ansRepository
            .createQueryBuilder()
            .select('option.is_correct')
            .from(option_entity_1.Option, 'option')
            .innerJoinAndSelect(answers_entity_1.Answer, 'answer', 'answer.opt_id = option.id')
            .getOne();
        await this.ansRepository.update({ opt_id: createAnsDto.opt_id }, { is_correct: ans.is_correct });
        return answer;
    }
    async getUserAns(id) {
        return this.ansRepository.find({ where: { part_id: id } });
    }
};
AnswersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(answers_entity_1.Answer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AnswersService);
exports.AnswersService = AnswersService;
//# sourceMappingURL=answers.service.js.map