import {Location} from '../../domain';
import {locationAdapter} from '../../infrastructure/adapters';
import {httpClient} from '../../infrastructure/http-client';
import {locationRepository} from '../../infrastructure/repositories/locationRepository/locationRepository';
import {UseCase} from '../types';

export const getLocationUseCase: UseCase<Location> = (id: string): Promise<Location> => {
	return locationRepository(id, locationAdapter, httpClient);
};