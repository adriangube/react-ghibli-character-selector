import { filmAdapter, filmListAdapter } from './filmAdapter';
import {EXPECTED_FILM, EXPECTED_FILM_LIST, FILM_API, FILM_LIST_API} from './filmAdapter.mock';


describe('filmAdapter', () => {
	it('should adapt a single film from API to Domain data model, if people, species, locations or vehicles contains the default value, this props values must be undefined', () => {
		const result = filmAdapter(FILM_API);
		expect(result).toStrictEqual(EXPECTED_FILM);
	});
});

describe('filmListAdapter', () => {
	it('should adapt a list of films from API to Domain data model, if people, species, locations or vehicles contains the default value, this props values must be undefined', () => {
		const result = filmListAdapter(FILM_LIST_API);
		expect(result).toStrictEqual(EXPECTED_FILM_LIST);
	});
});