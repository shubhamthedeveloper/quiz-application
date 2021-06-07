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
exports.CreateOptionDto = void 0;
const class_validator_1 = require("class-validator");
const graphql_1 = require("@nestjs/graphql");
let CreateOptionDto = class CreateOptionDto {
};
__decorate([
    graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateOptionDto.prototype, "opt_text", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateOptionDto.prototype, "ques_id", void 0);
__decorate([
    graphql_1.Field({ defaultValue: false }),
    __metadata("design:type", Boolean)
], CreateOptionDto.prototype, "is_correct", void 0);
CreateOptionDto = __decorate([
    graphql_1.InputType()
], CreateOptionDto);
exports.CreateOptionDto = CreateOptionDto;
//# sourceMappingURL=option.dto.js.map