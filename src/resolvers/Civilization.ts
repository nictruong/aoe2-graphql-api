import {
	CivilizationResolvers,
	ResolversParentTypes,
} from '../generated/graphql';
import * as AOE2ApiClient from '../services/AOE2ApiClient';

export const Civilization: CivilizationResolvers = {
	uniqueUnit: async (
		civilization: ResolversParentTypes['Civilization']
	): Promise<any> => {
		const unitNames = civilization.unique_unit?.map((unitUrl) => {
			return unitUrl?.split('/').pop();
		});
		return await Promise.all(
			unitNames
				?.filter((unitName) => unitName)
				.map(async (unitName) =>
					AOE2ApiClient.getUnitById(unitName as string)
				) ?? []
		);
	},
};
