import {Vehicle} from '../../../domain';
import {EntityApi} from '../../types/api/entityApi';
import {VehicleApi} from '../../types/api/vehicle/vehicle';

export type VehicleAdapter = (vehicleApi: VehicleApi) => Vehicle;

export const vehicleAdapter = (vehicleApi: VehicleApi): Vehicle => {
	return {
		id: vehicleApi?.id,
		name: vehicleApi?.name,
		description: vehicleApi?.description,
		vehicleClass: vehicleApi?.vehicle_class,
		length: vehicleApi?.length,
		pilot: vehicleApi?.pilot as EntityApi,
		films: vehicleApi?.films as EntityApi[]
	};
};