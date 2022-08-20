import {SpecieApi} from '../../types/api/specie/specie';
import { Specie } from '../../../domain';
import {EntityApi} from '../../types/api/entityApi';


export type SpecieAdapter = (specieApi: SpecieApi) => Specie;

export const specieAdapter = (specieApi: SpecieApi): Specie => {
	return {
		id: specieApi?.id,
		name: specieApi?.name,
		classification: specieApi?.classification,
		eyeColors: specieApi?.eye_colors,
		hairColors: specieApi?.hair_colors,
		people: specieApi?.people as EntityApi[],
		films: specieApi?.films as EntityApi[]
	};
};