import fetch from 'node-fetch';

const baseUrl = 'https://age-of-empires-2-api.herokuapp.com/api/v1';

export const getCivilizations = async () => {
	const resp = await fetch(`${baseUrl}/civilizations`);
	const { civilizations } = await resp.json();
	return civilizations;
};

export const getUnitById = async (name: string) => {
	const resp = await fetch(`${baseUrl}/unit/${name}`);
	return await resp.json();
};
