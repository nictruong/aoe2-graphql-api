import { Civilization, QueryResolvers } from '../generated/graphql';
import * as AOE2ApiClient from '../services/AOE2ApiClient';

export const Query: QueryResolvers = {
	civilizations: async (): Promise<Civilization[]> => {
		return await AOE2ApiClient.getCivilizations();
	},
};
