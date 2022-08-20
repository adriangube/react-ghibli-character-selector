import {locationAdapter} from './locationAdapter';
import {LOCATION, LOCATION_API} from './locationAdapter.mock';

describe('locationAdapter', () => {
	it('should return the location adapted from Api to Domain data model', () => {
		const result = locationAdapter(LOCATION_API);
		expect(result).toStrictEqual(LOCATION);
	});
});