"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const book_module_1 = require("./book/book.module");
const path_1 = require("path");
const app_resolver_1 = require("./app.resolver");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                playground: true,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.graphql'),
                definitions: {
                    path: (0, path_1.join)(process.cwd(), 'src/graphql.ts'),
                },
            }),
            book_module_1.BookModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_resolver_1.AppResolver, app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map