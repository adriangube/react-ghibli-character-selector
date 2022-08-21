import React from 'react';
import {SpecieGeneralInfo} from './SpecieGeneralInfo';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

const SPECIE = {
	'id': '603428ba-8a86-4b0b-a9f1-65df6abef3d3',
	'name': 'Cat',
	'classification': 'Mammal',
	'eyeColors': 'Brown, Black, Yellow, White, Emerald, Blue, Green',
	'hairColors': 'White, Black, Brown, Beige, Grey, Yellow',
};

describe('SpecieGeneralInfo', () => {
	it('should render the props of the specie provided', () => {
		render((
			<SpecieGeneralInfo specie={SPECIE as any}/>
		));
        
		const classification = screen.getByText(SPECIE.classification);
		expect(classification).toBeInTheDocument();
        
		const eyeColors = screen.getByText(SPECIE.eyeColors);
		expect(eyeColors).toBeInTheDocument();
        
		const hairColors = screen.getByText(SPECIE.hairColors);
		expect(hairColors).toBeInTheDocument();
	});
});