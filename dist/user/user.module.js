"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_resolver_1 = require("./user.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./Jwt/jwt.strategy");
const user_entities_1 = require("./entities/user.entities");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: 'topSecret51',
                signOptions: {
                    expiresIn: 3600,
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entities_1.User]),
        ],
        providers: [user_resolver_1.UserResolver, user_service_1.UserService, jwt_strategy_1.JwtStrategy],
        exports: [jwt_strategy_1.JwtStrategy, passport_1.PassportModule],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map