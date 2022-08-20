import {Film} from '../../../domain/film/film';
import {FilmAdapter} from '../../adapters/film/types';
import {HttpClientDef} from '../../http-client/types';
import {ApiResponse} from '../../types';
import {EntityApi} from '../../types/api/entityApi';
import {FilmRepository} from './types';


const PEOPLE_BASE_URL = 'https://ghibliapi.herokuapp.com/people/';
const LOCATIONS_BASE_URL = 'https://ghibliapi.herokuapp.com/locations/';
const VEHICLES_BASE_URL = 'https://ghibliapi.herokuapp.com/vehicles/';


const categoryUrlsWithoutDefault = (categoryList: string[], categoryBaseURL: string): string[] | undefined => {
	const result = categoryList.filter((categoryURL) => categoryURL !== categoryBaseURL);
	return result?.length > 0 ? result : undefined;
};


export const filmRepository: FilmRepository = async (id, adapter: FilmAdapter, httpClient: HttpClientDef): Promise<Film> => {
	const url = `${process.env.REACT_APP_BASE_API_URL}/films/${id}`;
	const apiData = await httpClient.get({url});

	const people = categoryUrlsWithoutDefault(apiData?.data?.people, PEOPLE_BASE_URL);
	const locations = categoryUrlsWithoutDefault(apiData?.data?.locations, LOCATIONS_BASE_URL);
	const vehicles = categoryUrlsWithoutDefault(apiData?.data?.vehicles, VEHICLES_BASE_URL);


	const categories = [people, locations, vehicles];


	const result: Promise<Array<ApiResponse<EntityApi[]>[]>>[] = [];

	categories.forEach((category) => {
		const promises: Promise<ApiResponse<EntityApi[]>[]>[] = [];
		category?.forEach((url) => {
			promises.push(httpClient.get({url: `${url}?fields=id,name`}));
		});
		result.push(Promise.all(promises));
	});

	const resolvedCategories: any = await Promise.all(result);

	apiData.data.people = resolvedCategories[0]?.map((data: ApiResponse<EntityApi[]>) => {
		return {...data?.data};
	});
	apiData.data.locations = resolvedCategories[1]?.map((data: ApiResponse<EntityApi[]>) => {
		return {...data?.data};
	});
	apiData.data.vehicles = resolvedCategories[2]?.map((data: ApiResponse<EntityApi[]>) => {
		return {...data?.data};
	});
	return adapter(apiData?.data);
};