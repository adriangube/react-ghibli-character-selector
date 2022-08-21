import {People} from '../../../domain';
import {PeopleAdapter} from '../../adapters';
import {HttpClientDef} from '../../http-client/types';
import {ApiResponse} from '../../types';
import {EntityApi} from '../../types/api/entityApi';
import {adaptFilmsCategory, categoryUrlsWithoutDefault, fetchAllCategories, FILMS_BASE_URL} from '../categories';

export type PeopleRepository = (id: string, adapter: PeopleAdapter, httpClient: HttpClientDef) => Promise<People>;

export const peopleRepository = async (id: string, adapter: PeopleAdapter, httpClient: HttpClientDef): Promise<People> => {
	const url = `${process.env.REACT_APP_BASE_API_URL}/people/${id}`;
	const apiData = await httpClient.get({url});
    
	const films = categoryUrlsWithoutDefault(apiData?.data?.films, FILMS_BASE_URL);
	const species = [apiData?.data?.species];
    
	const categories: any = [films, species];
    
	const resolvedCategories: any = await fetchAllCategories(categories, httpClient);
    
	apiData.data.films = resolvedCategories[0]?.map((data: ApiResponse<EntityApi[]>) => {
		return {...adaptFilmsCategory(data?.data as any)};
	});
    
	apiData.data.species = resolvedCategories[1][0]?.data;
	return adapter(apiData?.data);
};