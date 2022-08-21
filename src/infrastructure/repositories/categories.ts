import {HttpClientDef} from '../http-client/types';
import {ApiResponse} from '../types';
import {EntityApi} from '../types/api/entityApi';

export const FILMS_BASE_URL = 'https://ghibliapi.herokuapp.com/films/';
export const PEOPLE_BASE_URL = 'https://ghibliapi.herokuapp.com/people/';
export const SPECIES_BASE_URL = 'https://ghibliapi.herokuapp.com/species/';
export const LOCATIONS_BASE_URL = 'https://ghibliapi.herokuapp.com/locations/';
export const VEHICLES_BASE_URL = 'https://ghibliapi.herokuapp.com/vehicles/';


export const categoryUrlsWithoutDefault = (categoryList: string[], categoryBaseURL: string): string[] | undefined => {
	const result = categoryList.filter((categoryURL) => categoryURL !== categoryBaseURL);
	return result?.length > 0 ? result : undefined;
};


export const fetchAllCategories = async (categoriesArray: Array<string[]>, httpClient: HttpClientDef) => {
	const result: Promise<Array<ApiResponse<EntityApi[]>[]>>[] = [];

	categoriesArray.forEach((category: string[]) => {
		const promises: Promise<ApiResponse<EntityApi[]>[]>[] = [];
		category?.forEach((url: string) => {
			promises.push(httpClient.get({url: `${url}?fields=id,name,title`}));
		});
		result.push(Promise.all(promises));
	});

	const resolvedCategories = await Promise.all(result);
	return resolvedCategories;
};

export const adaptFilmsCategory = (film: {id: string, title: string;}): EntityApi => {
	return {id: film.id, name: film.title};
};