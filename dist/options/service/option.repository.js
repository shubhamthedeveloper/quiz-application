"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionRepository = void 0;
const typeorm_1 = require("typeorm");
const option_entity_1 = require("../entities/option.entity");
let OptionRepository = class OptionRepository extends typeorm_1.Repository {
    async createOpt(createOptionDto) {
        const { opt_text, ques_id, is_correct } = createOptionDto;
        const opt = new option_entity_1.Option();
        opt.opt_text = opt_text;
        opt.ques_id = ques_id;
        opt.is_correct = is_correct;
        await opt.save();
        return opt;
    }
};
OptionRepository = __decorate([
    typeorm_1.EntityRepository(option_entity_1.Option)
], OptionRepository);
exports.OptionRepository = OptionRepository;
//# sourceMappingURL=option.repository.js.map