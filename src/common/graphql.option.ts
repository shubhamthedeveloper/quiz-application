import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { Injectable } from '@nestjs/common';
import * as path from 'path';

@Injectable()
export class GraphQlOption implements GqlOptionsFactory {
  createGqlOptions(): GqlModuleOptions {
    return {
      // autoSchemaFile: true,
      autoSchemaFile: path.join(process.cwd(), 'schema.gql'),
      context: ({ req }) => ({ req }),
      formatError: (error: GraphQLError) => {
        return {
          message: error.message,
          statusCode: error.extensions.exception.response.statusCode,
          errorCode: error.extensions.exception.response.error,
        };
      },
    };
  }
}
