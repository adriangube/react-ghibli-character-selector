import {Specie} from '../../domain';
import {specieAdapter} from '../../infrastructure/adapters';
import {httpClient} from '../../infrastructure/http-client';
import {specieRepository} from '../../infrastructure/repositories/specieRepository/specieRepositoy';

export const getSpecieUseCase = (id: string): Promise<Specie> => {
	return specieRepository(id, specieAdapter, httpClient);
};