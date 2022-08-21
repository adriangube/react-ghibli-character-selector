import {Specie} from '../../domain';
import {specieAdapter} from '../../infrastructure/adapters';
import {httpClient} from '../../infrastructure/http-client';
import {specieRepository} from '../../infrastructure/repositories/specieRepository/specieRepositoy';
import {UseCase} from '../types';

export const getSpecieUseCase: UseCase<Specie> = (id: string): Promise<Specie> => {
	return specieRepository(id, specieAdapter, httpClient);
};