import {Vehicle} from '../../../domain';
import {VehicleApi} from '../../types/api/vehicle/vehicle';

export const VEHICLE_API: VehicleApi = {
	'id': '923d70c9-8f15-4972-ad53-0128b261d628',
	'name': 'Sosuke\'s Boat',
	'description': 'A toy boat where Sosuke plays',
	'vehicle_class': 'Boat',
	'length': '10',
	'pilot': {
		'id': 'a10f64f3-e0b6-4a94-bf30-87ad8bc51607',
		'name': 'Sosuke',
	},
	'films': [
		{
			'id': '758bf02e-3122-46e0-884e-67cf83df1786',
			'name': 'Ponyo',
		}
	],
};

export const VEHICLE: Vehicle = {
	'id': '923d70c9-8f15-4972-ad53-0128b261d628',
	'name': 'Sosuke\'s Boat',
	'description': 'A toy boat where Sosuke plays',
	'vehicleClass': 'Boat',
	'length': '10',
	'pilot': {
		'id': 'a10f64f3-e0b6-4a94-bf30-87ad8bc51607',
		'name': 'Sosuke',
	},
	'films': [
		{
			'id': '758bf02e-3122-46e0-884e-67cf83df1786',
			'name': 'Ponyo',
		}
	],
};