import {Specie} from '../../../domain';
import {SpecieApi} from '../../types/api/specie/specie';

export const SPECIE_API: SpecieApi = {
	'id': '603428ba-8a86-4b0b-a9f1-65df6abef3d3',
	'name': 'Cat',
	'classification': 'Mammal',
	'eye_colors': 'Brown, Black, Yellow, White, Emerald, Blue, Green',
	'hair_colors': 'White, Black, Brown, Beige, Grey, Yellow',
	'people': [
		{
			'id': '7151abc6-1a9e-4e6a-9711-ddb50ea572ec',
			'name': 'Jiji',
		},
		{
			'id': 'f467e18e-3694-409f-bdb3-be891ade1106',
			'name': 'Catbus',
		}
	],
	'films': [
		{
			'id': '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
			'name': 'My Neighbor Totoro',
		}
	],
};

export const SPECIE: Specie = {
	'id': '603428ba-8a86-4b0b-a9f1-65df6abef3d3',
	'name': 'Cat',
	'classification': 'Mammal',
	'eyeColors': 'Brown, Black, Yellow, White, Emerald, Blue, Green',
	'hairColors': 'White, Black, Brown, Beige, Grey, Yellow',
	'people': [
		{
			'id': '7151abc6-1a9e-4e6a-9711-ddb50ea572ec',
			'name': 'Jiji',
		},
		{
			'id': 'f467e18e-3694-409f-bdb3-be891ade1106',
			'name': 'Catbus',
		}
	],
	'films': [
		{
			'id': '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
			'name': 'My Neighbor Totoro',
		}
	],
};