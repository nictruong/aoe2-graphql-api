import {
	addResolversToSchema,
	GraphQLFileLoader,
	loadSchemaSync,
} from 'graphql-tools';
import resolvers from './resolvers/resolvers';

const schema = loadSchemaSync('./schemas/**/*.graphql', {
	loaders: [new GraphQLFileLoader()],
});

export const schemasWithResolvers = addResolversToSchema({
	schema,
	resolvers,
});
