import {Film} from '../../domain/film/film';
import { filmListAdapter } from '../../infrastructure/adapters/film/filmAdapter';
import {filmListRepository} from '../../infrastructure/repositories/filmListRepository/filmListRepository';
import { httpClient } from '../../infrastructure/http-client/httpClient';
import {UseCase} from '../types';


export const getFilmListUseCase: UseCase<Film[]> = (): Promise<Film[]> => {
	return filmListRepository(filmListAdapter, httpClient);
};