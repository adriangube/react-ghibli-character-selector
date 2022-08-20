import {vehicleAdapter} from './vehicleAdapter';
import {VEHICLE, VEHICLE_API} from './vehicleAdapter.mock';

describe('vehicleAdapter', () => {
	it('should return the adapter specie from Api to Domain data model', () => {
		const result = vehicleAdapter(VEHICLE_API);
		expect(result).toStrictEqual(VEHICLE);
	});
});