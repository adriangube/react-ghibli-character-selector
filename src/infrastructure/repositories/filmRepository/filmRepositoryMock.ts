import {Film} from '../../../domain/film/film';
import {FilmAdapter} from '../../adapters/film/types';
import {httpClientMock} from '../../http-client';
import {HttpClientDef} from '../../http-client/types';
import {FILM_API} from './mockData';
import {FilmRepository} from './types';

export const filmListRepositoryMock: FilmRepository = async (id: string, adapter: FilmAdapter, httpClient: HttpClientDef = httpClientMock): Promise<Film> => {
	const url = `${process.env.REACT_APP_BASE_API_URL}/films`;
	const apiData = await httpClient.get({url, config: {data: FILM_API}});
	return adapter(apiData);
};