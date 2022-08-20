import {Film} from '../../../domain/film/film';
import {FilmListAdapter} from '../../adapters/film/types';
import {httpClientMock} from '../../http-client';
import {HttpClientDef} from '../../http-client/types';
import {FilmListRepository} from './filmListRepository';
import {FILM_LIST_API_RESPONSE} from './mockData';

export const filmListRepositoryMock: FilmListRepository = async (adapter: FilmListAdapter, httpClient: HttpClientDef = httpClientMock): Promise<Film[]> => {
	const url = `${process.env.REACT_APP_BASE_API_URL}/films`;
	const apiData = await httpClient.get({url, config: {data: FILM_LIST_API_RESPONSE}});
	return adapter(apiData);
};