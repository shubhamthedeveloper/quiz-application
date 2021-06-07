"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const option_resolver_1 = require("./option.resolver");
const option_service_1 = require("./option.service");
const option_entity_1 = require("./entities/option.entity");
let OptionsModule = class OptionsModule {
};
OptionsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([option_entity_1.Option])],
        providers: [option_resolver_1.OptionResolver, option_service_1.OptionService],
    })
], OptionsModule);
exports.OptionsModule = OptionsModule;
//# sourceMappingURL=options.module.js.map