import React from 'react';
import {LocationGeneralInfo} from './LocationGeneralInfo';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

const LOCATION = {
	'id': '11014596-71b0-4b3e-b8c0-1c4b15f28b9a',
	'name': 'Irontown',
	'climate': 'Continental',
	'terrain': 'Mountain',
	'surfaceWater': '40'
};

describe('LocationGeneralInfo', () => {
	it('should render the props of the film provided', () => {
		render((
			<LocationGeneralInfo location={LOCATION}/>
		));
        
		const climate = screen.getByText(LOCATION.climate);
		expect(climate).toBeInTheDocument();

		const terrain = screen.getByText(LOCATION.terrain);
		expect(terrain).toBeInTheDocument();

		const surfaceWater = screen.getByText(`${LOCATION.surfaceWater}%`);
		expect(surfaceWater).toBeInTheDocument();
	});
});