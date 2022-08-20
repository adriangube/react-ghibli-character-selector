import {People} from '../../../domain';
import {PeopleApi} from '../../types/api/people/people';

export const PEOPLE_API: PeopleApi = {
	'id': 'ba924631-068e-4436-b6de-f3283fa848f0',
	'name': 'Cat King',
	'gender': 'Male',
	'eye_color': 'Emerald',
	'hair_color': 'Grey',
	'films': [
		{
			'id': '90b72513-afd4-4570-84de-a56c312fdf81',
			'name': 'The Cat Returns',
		}
	],
	'species': {
		'id': '603428ba-8a86-4b0b-a9f1-65df6abef3d3',
		'name': 'Cat',
	}
};

export const PEOPLE: People = {
	'id': 'ba924631-068e-4436-b6de-f3283fa848f0',
	'name': 'Cat King',
	'gender': 'Male',
	'age': undefined,
	'eyeColor': 'Emerald',
	'hairColor': 'Grey',
	'films': [
		{
			'id': '90b72513-afd4-4570-84de-a56c312fdf81',
			'name': 'The Cat Returns',
		}
	],
	'species': {
		'id': '603428ba-8a86-4b0b-a9f1-65df6abef3d3',
		'name': 'Cat',
	}
};