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
exports.UserResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_type_1 = require("../type/user.type");
const create_user_dto_1 = require("../dto/create-user.dto");
const sign_in_dto_1 = require("../dto/sign-in.dto");
const user_service_1 = require("../service/user.service");
const token_type_1 = require("../type/token.type");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth-guard");
const get_user_decorator_1 = require("../get-user.decorator");
const user_entities_1 = require("../entities/user.entities");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    SignUp(userDto) {
        return this.userService.createUser(userDto);
    }
    SignIn(signinDto) {
        return this.userService.userSignIn(signinDto);
    }
    updateUser(id, status, user) {
        return this.userService.updateStatus(id, status, user);
    }
};
__decorate([
    graphql_1.Mutation(() => user_type_1.UserType),
    __param(0, graphql_1.Args('userDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.UserDto]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "SignUp", null);
__decorate([
    graphql_1.Mutation(() => token_type_1.TokenType),
    __param(0, graphql_1.Args('signinDto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_in_dto_1.SigninDto]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "SignIn", null);
__decorate([
    common_1.UseGuards(auth_guard_1.GqlAuthGuard),
    graphql_1.Mutation(() => user_type_1.UserType),
    __param(0, graphql_1.Args('id')),
    __param(1, graphql_1.Args('status')),
    __param(2, get_user_decorator_1.GetUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean, user_entities_1.User]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "updateUser", null);
UserResolver = __decorate([
    graphql_1.Resolver(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map