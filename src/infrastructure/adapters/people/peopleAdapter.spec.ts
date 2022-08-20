import {peopleAdapter} from './peopleAdapter';
import {PEOPLE, PEOPLE_API} from './people.Adapter.mock';

describe('peopleAdapter', () => {
	it('should return the people adapted from Api to Domain data model', () => {
		const result = peopleAdapter(PEOPLE_API);
		expect(result).toStrictEqual(PEOPLE);
	});
});