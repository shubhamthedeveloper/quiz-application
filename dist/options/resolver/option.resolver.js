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
exports.OptionResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const option_type_1 = require("../type/option.type");
const option_dto_1 = require("../dto/option.dto");
const option_service_1 = require("../service/option.service");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../user/auth-guard");
let OptionResolver = class OptionResolver {
    constructor(optService) {
        this.optService = optService;
    }
    createOption(createOptionDto) {
        return this.optService.createOpt(createOptionDto);
    }
    getOptionById(ques_id) {
        return this.optService.getOpt(ques_id);
    }
    updateOption(id, status) {
        return this.optService.updateOptStatus(id, status);
    }
};
__decorate([
    graphql_1.Mutation(() => option_type_1.OptionType),
    __param(0, graphql_1.Args('createOptionDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [option_dto_1.CreateOptionDto]),
    __metadata("design:returntype", void 0)
], OptionResolver.prototype, "createOption", null);
__decorate([
    graphql_1.Query(() => [option_type_1.OptionType]),
    __param(0, graphql_1.Args('ques_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OptionResolver.prototype, "getOptionById", null);
__decorate([
    graphql_1.Mutation(() => option_type_1.OptionType),
    __param(0, graphql_1.Args('id')), __param(1, graphql_1.Args('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", void 0)
], OptionResolver.prototype, "updateOption", null);
OptionResolver = __decorate([
    graphql_1.Resolver(option_type_1.OptionType),
    common_1.UseGuards(auth_guard_1.GqlAuthGuard),
    __metadata("design:paramtypes", [option_service_1.OptionService])
], OptionResolver);
exports.OptionResolver = OptionResolver;
//# sourceMappingURL=option.resolver.js.map