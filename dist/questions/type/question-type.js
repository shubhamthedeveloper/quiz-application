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
exports.QuesType = void 0;
const graphql_1 = require("@nestjs/graphql");
let QuesType = class QuesType {
};
__decorate([
    graphql_1.Field((type) => graphql_1.Int),
    __metadata("design:type", Number)
], QuesType.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], QuesType.prototype, "ques_text", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Boolean)
], QuesType.prototype, "is_active", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], QuesType.prototype, "quiz_id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Number)
], QuesType.prototype, "created_by", void 0);
QuesType = __decorate([
    graphql_1.ObjectType('Question')
], QuesType);
exports.QuesType = QuesType;
//# sourceMappingURL=question-type.js.map