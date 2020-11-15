import { Resolvers } from '../generated/graphql';
import { Civilization } from './Civilization';
import { Query } from './Query';

const resolvers: Resolvers = {
	Query,
	Civilization,
};

export default resolvers;
