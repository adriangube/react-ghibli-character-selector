import {LocationApi} from '../../types/api/location/location';
import { Entity, Location } from '../../../domain';

export type LocationAdapter = (locationApi: LocationApi) => Location;

export const locationAdapter = (locationApi: LocationApi): Location => {
	return {
		id: locationApi?.id,
		name: locationApi?.name,
		climate: locationApi?.climate,
		terrain: locationApi?.terrain,
		surfaceWater: locationApi?.surface_water,
		residents: locationApi?.residents as Entity[],
		films: locationApi?.films as Entity[]
	};
};