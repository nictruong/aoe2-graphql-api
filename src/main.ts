import { ApolloServer } from 'apollo-server';
import * as schema from './schema';

const server = new ApolloServer({
	introspection: true,
	playground: {
		settings: {
			'editor.theme': 'dark',
		},
	},
	schema: schema.schemasWithResolvers,
});

server
	.listen({ port: process.env.PORT || 4000 })
	.then(({ url }) => console.log(`Server ready at ${url}.`));

// Hot Module Replacement
if (module.hot) {
	module.hot.accept();
	module.hot.dispose(() => console.log('Module disposed. '));
}
