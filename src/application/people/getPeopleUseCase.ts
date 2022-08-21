import {People} from '../../domain';
import {peopleAdapter} from '../../infrastructure/adapters';
import {httpClient} from '../../infrastructure/http-client';
import {peopleRepository} from '../../infrastructure/repositories/peopleRepository/peopleRepository';

export const getPeopleUseCase = (id: string): Promise<People> => {
	return peopleRepository(id, peopleAdapter, httpClient);
};