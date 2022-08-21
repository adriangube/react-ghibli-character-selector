import React from 'react';
import {PeopleGeneralInfo} from './PeopleGeneralInfo';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

const PEOPLE = {
	'id': 'ba924631-068e-4436-b6de-f3283fa848f0',
	'name': 'Cat King',
	'gender': 'Male',
	'eyeColor': 'Emerald',
	'hairColor': 'Grey',
	'species': {
		'id': '1',
		'name': 'Cat'
	}
};

describe('PeopleGeneralInfo', () => {
	it('should render the props of the people provided', () => {
		render((
			<PeopleGeneralInfo people={PEOPLE as any}/>
		));
        
		const gender = screen.getByText(PEOPLE.gender);
		expect(gender).toBeInTheDocument();

		const eyeColor = screen.getByText(PEOPLE.eyeColor);
		expect(eyeColor).toBeInTheDocument();

		const hairColor = screen.getByText(PEOPLE.hairColor);
		expect(hairColor).toBeInTheDocument();
        
		const specie = screen.getByText(PEOPLE.species.name);
		expect(specie).toBeInTheDocument();
	});
});