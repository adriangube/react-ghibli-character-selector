import {Vehicle} from '../../domain';
import {vehicleAdapter} from '../../infrastructure/adapters';
import {httpClient} from '../../infrastructure/http-client';
import {vehicleRepository} from '../../infrastructure/repositories/vehicleRepository/vehicleRepository';

export const getVehicleUseCase = (id: string): Promise<Vehicle> => {
	return vehicleRepository(id, vehicleAdapter, httpClient);
};