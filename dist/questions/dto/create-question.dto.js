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
exports.CreateQuesDto = void 0;
const class_validator_1 = require("class-validator");
const graphql_1 = require("@nestjs/graphql");
let CreateQuesDto = class CreateQuesDto {
};
__decorate([
    graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], CreateQuesDto.prototype, "ques_text", void 0);
__decorate([
    graphql_1.Field(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateQuesDto.prototype, "quiz_id", void 0);
CreateQuesDto = __decorate([
    graphql_1.InputType()
], CreateQuesDto);
exports.CreateQuesDto = CreateQuesDto;
//# sourceMappingURL=create-question.dto.js.map