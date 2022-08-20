import {Film} from '../../domain/film/film';
import { filmAdapter } from '../../infrastructure/adapters/film/filmAdapter';
import {filmRepository} from '../../infrastructure/repositories/filmRepository/filmRepository';
import { httpClient } from '../../infrastructure/http-client/httpClient';

export const getFilmUseCase = (id: string): Promise<Film> => {
	return filmRepository(id, filmAdapter, httpClient);
};