import {People} from '../../domain';
import {peopleAdapter} from '../../infrastructure/adapters';
import {httpClient} from '../../infrastructure/http-client';
import {peopleRepository} from '../../infrastructure/repositories/peopleRepository/peopleRepository';
import {UseCase} from '../types';

export const getPeopleUseCaseL: UseCase<People> = (id: string): Promise<People> => {
	return peopleRepository(id, peopleAdapter, httpClient);
};