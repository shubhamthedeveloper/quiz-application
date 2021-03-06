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
exports.UserType = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_role_enum_1 = require("../entities/user-role.enum");
let UserType = class UserType {
};
__decorate([
    graphql_1.Field((type) => graphql_1.Int),
    __metadata("design:type", Number)
], UserType.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserType.prototype, "first_name", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserType.prototype, "last_name", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserType.prototype, "phone", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserType.prototype, "email", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserType.prototype, "username", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserType.prototype, "password", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", Boolean)
], UserType.prototype, "is_active", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UserType.prototype, "role", void 0);
UserType = __decorate([
    graphql_1.ObjectType('User')
], UserType);
exports.UserType = UserType;
//# sourceMappingURL=user.type.js.map