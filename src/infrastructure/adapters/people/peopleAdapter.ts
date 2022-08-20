import {People} from '../../../domain';
import {EntityApi} from '../../types/api/entityApi';
import {PeopleApi} from '../../types/api/people/people';

export type PeopleAdapter = (peopleApi: PeopleApi) => People;

export const peopleAdapter = (peopleApi: PeopleApi): People => {
	return {
		id: peopleApi?.id,
		name: peopleApi?.name,
		gender: peopleApi?.gender,
		age: peopleApi?.age,
		eyeColor: peopleApi?.eye_color,
		hairColor: peopleApi?.hair_color,
		films: peopleApi?.films as EntityApi[],
		species: peopleApi?.species as EntityApi
	};
};