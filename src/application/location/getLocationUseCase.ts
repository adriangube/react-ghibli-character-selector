import {Location} from '../../domain';
import {locationAdapter} from '../../infrastructure/adapters';
import {httpClient} from '../../infrastructure/http-client';
import {locationRepository} from '../../infrastructure/repositories/locationRepository/locationRepository';

export const getLocationUseCase = (id: string): Promise<Location> => {
	return locationRepository(id, locationAdapter, httpClient);
};