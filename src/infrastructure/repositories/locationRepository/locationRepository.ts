import {Location} from '../../../domain';
import {LocationAdapter} from '../../adapters';
import {HttpClientDef} from '../../http-client/types';
import {ApiResponse} from '../../types';
import {EntityApi} from '../../types/api/entityApi';
import {adaptFilmsCategory, categoryUrlsWithoutDefault, fetchAllCategories, FILMS_BASE_URL, PEOPLE_BASE_URL} from '../categories';
import {LocationRepository} from './types';

export const locationRepository: LocationRepository = async (id: string, adapter: LocationAdapter, httpClient: HttpClientDef): Promise<Location> => {
	const url = `${process.env.REACT_APP_BASE_API_URL}/locations/${id}`;
	const apiData = await httpClient.get({url});
    
	const residents = categoryUrlsWithoutDefault(apiData?.data?.residents, PEOPLE_BASE_URL);
	const films = categoryUrlsWithoutDefault(apiData?.data?.films, FILMS_BASE_URL);

	const categories: any = [residents, films];


	const resolvedCategories: any = await fetchAllCategories(categories, httpClient);

	apiData.data.residents = resolvedCategories[0]?.map((data: ApiResponse<EntityApi[]>) => {
		return {...data?.data};
	});
	apiData.data.films = resolvedCategories[0]?.map((data: ApiResponse<EntityApi[]>) => {
		return {...adaptFilmsCategory(data?.data as any)};
	});
	return adapter(apiData?.data);
};