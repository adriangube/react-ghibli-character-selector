import {Film} from '../../domain/film/film';
import { filmAdapter } from '../../infrastructure/adapters/film/filmAdapter';
import {filmRepository} from '../../infrastructure/repositories/filmRepository/filmRepository';
import { httpClient } from '../../infrastructure/http-client/httpClient';
import {UseCase} from '../types';

export const getFilmUseCase: UseCase<Film> = (id: string): Promise<Film> => {
	return filmRepository(id, filmAdapter, httpClient);
};