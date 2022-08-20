import {Specie} from '../../../domain';
import {SpecieAdapter} from '../../adapters';
import {HttpClientDef} from '../../http-client/types';
import {ApiResponse} from '../../types';
import {EntityApi} from '../../types/api/entityApi';
import {adaptFilmsCategory, categoryUrlsWithoutDefault, fetchAllCategories, FILMS_BASE_URL, PEOPLE_BASE_URL} from '../categories';

export type SpecieRepository = (id: string, adapter: SpecieAdapter, httpClient: HttpClientDef) => Promise<Specie>;

export const specieRepository: SpecieRepository = async (id: string, adapter: SpecieAdapter, httpClient: HttpClientDef): Promise<Specie> => {
	const url = `${process.env.REACT_APP_BASE_API_URL}/species/${id}`;
	const apiData = await httpClient.get({url});
    
	const people = categoryUrlsWithoutDefault(apiData?.data?.people, PEOPLE_BASE_URL);
	const films = categoryUrlsWithoutDefault(apiData?.data?.films, FILMS_BASE_URL);

	const categories: any = [people, films];

	const resolvedCategories: any = await fetchAllCategories(categories, httpClient);
    
	apiData.data.people = resolvedCategories[0]?.map((data: ApiResponse<EntityApi[]>) => {
		return {...data?.data};
	});
	apiData.data.films = resolvedCategories[1]?.map((data: ApiResponse<EntityApi[]>) => {
		return {...adaptFilmsCategory(data?.data as any)};
	});
    
	return adapter(apiData?.data);
};