import {Vehicle} from '../../../domain';
import {VehicleAdapter} from '../../adapters';
import {HttpClientDef} from '../../http-client/types';
import {ApiResponse} from '../../types';
import {EntityApi} from '../../types/api/entityApi';
import {adaptFilmsCategory, categoryUrlsWithoutDefault, fetchAllCategories, FILMS_BASE_URL, PEOPLE_BASE_URL} from '../categories';

export type VehicleRepository = (id: string, adapter: VehicleAdapter, httpClient: HttpClientDef) => Promise<Vehicle>;

export const vehicleRepository: VehicleRepository = async (id: string, adapter: VehicleAdapter, httpClient: HttpClientDef): Promise<Vehicle> => {
	const url = `${process.env.REACT_APP_BASE_API_URL}/vehicles/${id}`;
	const apiData = await httpClient.get({url});
    
	const pilot = [apiData?.data?.pilot];
	const films = categoryUrlsWithoutDefault(apiData?.data?.films, FILMS_BASE_URL);

	const categories: any = [pilot, films];

	const resolvedCategories: any = await fetchAllCategories(categories, httpClient);

	apiData.data.pilot = resolvedCategories[0][0]?.data;
	apiData.data.films = resolvedCategories[1]?.map((data: ApiResponse<EntityApi[]>) => {
		return {...adaptFilmsCategory(data?.data as any)};
	});
	return adapter(apiData?.data);
};