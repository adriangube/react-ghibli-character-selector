import {Vehicle} from '../../domain';
import {vehicleAdapter} from '../../infrastructure/adapters';
import {httpClient} from '../../infrastructure/http-client';
import {vehicleRepository} from '../../infrastructure/repositories/vehicleRepository/vehicleRepository';
import {UseCase} from '../types';

export const getVehicleUseCase: UseCase<Vehicle> = (id: string): Promise<Vehicle> => {
	return vehicleRepository(id, vehicleAdapter, httpClient);
};