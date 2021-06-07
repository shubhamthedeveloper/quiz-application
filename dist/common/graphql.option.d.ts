import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
export declare class GraphQlOption implements GqlOptionsFactory {
    createGqlOptions(): GqlModuleOptions;
}
