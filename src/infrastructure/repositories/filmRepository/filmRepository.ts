import {Film} from '../../../domain/film/film';
import {FilmAdapter} from '../../adapters/film/types';
import {HttpClientDef} from '../../http-client/types';
import {FilmRepository} from './types';

export const filmRepository: FilmRepository = async (id, adapter: FilmAdapter, httpClient: HttpClientDef): Promise<Film> => {
	const url = `${process.env.REACT_APP_BASE_API_URL}/films/${id}`;
	const apiData = await httpClient.get({url});
	return adapter(apiData?.data);
};