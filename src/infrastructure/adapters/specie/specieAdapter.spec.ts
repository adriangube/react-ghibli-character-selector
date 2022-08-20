import {specieAdapter} from './specieAdapter';
import {SPECIE, SPECIE_API} from './specieAdapter.mock';

describe('specieAdapter', () => {
	it('should return the adapted specie from Api to Domain data model', () => {
		const result = specieAdapter(SPECIE_API);
		expect(result).toStrictEqual(SPECIE);
	});
});