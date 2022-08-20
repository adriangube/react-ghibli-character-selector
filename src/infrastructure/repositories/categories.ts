
export const PEOPLE_BASE_URL = 'https://ghibliapi.herokuapp.com/people/';
export const SPECIES_BASE_URL = 'https://ghibliapi.herokuapp.com/species/';
export const LOCATIONS_BASE_URL = 'https://ghibliapi.herokuapp.com/locations/';
export const VEHICLES_BASE_URL = 'https://ghibliapi.herokuapp.com/vehicles/';


export const categoryUrlsWithoutDefault = (categoryList: string[], categoryBaseURL: string): string[] | undefined => {
	const result = categoryList.filter((categoryURL) => categoryURL !== categoryBaseURL);
	return result?.length > 0 ? result : undefined;
};
