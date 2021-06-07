"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const graphql_1 = require("@nestjs/graphql");
var Role;
(function (Role) {
    Role["USER"] = "user";
    Role["ADMIN"] = "admin";
})(Role = exports.Role || (exports.Role = {}));
graphql_1.registerEnumType(Role, {
    name: 'Role',
});
//# sourceMappingURL=user-role.enum.js.map