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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exceptions_1 = require("../common/exceptions");
const user_entities_1 = require("./entities/user.entities");
const token_type_1 = require("./type/token.type");
const jwt_1 = require("@nestjs/jwt");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async createUser(userDto) {
        if (await this.userRepository.findOne({
            where: { username: userDto.username },
        })) {
            throw new common_1.BadRequestException('Username Already Exists', exceptions_1.ErrorCode.SAME_USERNAME);
        }
        if (await this.userRepository.findOne({
            where: { phone: userDto.phone },
        })) {
            throw new common_1.BadRequestException('Phone number already exists', exceptions_1.ErrorCode.SAME_PHONE);
        }
        if (await this.userRepository.findOne({
            where: { email: userDto.email },
        })) {
            throw new common_1.BadRequestException('Email already exists', exceptions_1.ErrorCode.SAME_EMAIL);
        }
        return this.userRepository.save(Object.assign(Object.assign({}, userDto), { password: await bcrypt.hash(userDto.password, 12) }));
    }
    async userSignIn(signinDto) {
        const username = await this.validateUserPassword(signinDto);
        if (!username) {
            throw new common_1.UnauthorizedException('Invalid login Credentials', exceptions_1.ErrorCode.INVALID_CREDENTIALS);
        }
        const payload = { username };
        const accessToken = await this.jwtService.sign(payload);
        const token = new token_type_1.TokenType();
        token.token = accessToken;
        return token;
    }
    async getUserById(id) {
        return this.userRepository.findOne({ where: { id } });
    }
    async updateStatus(id, status) {
        const userData = await this.getUserById(id);
        if (!userData) {
            throw new common_1.NotFoundException('User Not Found', exceptions_1.ErrorCode.NOT_PRESENT);
        }
        userData.is_active = status;
        return this.userRepository.save(userData);
    }
    async validateUserPassword(signinDto) {
        const user = await this.userRepository.findOne({
            where: { username: signinDto.username },
        });
        if (user.is_active == false) {
            throw new common_1.UnauthorizedException('User is Inactive', exceptions_1.ErrorCode.ACCESS_DENIED);
        }
        if (user && (await user.validatePassword(signinDto.password))) {
            return user.username;
        }
        throw new common_1.UnauthorizedException('Invalid login credentials', exceptions_1.ErrorCode.INVALID_CREDENTIALS);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entities_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map