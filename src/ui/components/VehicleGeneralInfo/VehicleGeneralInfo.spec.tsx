import React from 'react';
import {VehicleGeneralInfo} from './VehicleGeneralInfo';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

const VEHICLE = {
	'id': '923d70c9-8f15-4972-ad53-0128b261d628',
	'name': 'Sosuke\'s Boat',
	'description': 'A toy boat where Sosuke plays',
	'vehicleClass': 'Boat',
	'length': '10',
	'pilot': {
		'id': 'a10f64f3-e0b6-4a94-bf30-87ad8bc51607',
		'name': 'Sosuke',
	}
};

describe('VehicleGeneralInfo', () => {
	it('should render the info of the Vehicle provided', () => {
		render((
			<VehicleGeneralInfo vehicle={VEHICLE as any} />
		));
        
		const description = screen.getByText(VEHICLE.description);
		expect(description).toBeInTheDocument();

		const pilotName = screen.getByText(VEHICLE.pilot.name);
		expect(pilotName).toBeInTheDocument();

		const vehicleClass = screen.getByText(VEHICLE.vehicleClass);
		expect(vehicleClass).toBeInTheDocument();

		const length = screen.getByText(`${VEHICLE.length}m`);
		expect(length).toBeInTheDocument();
	});
});