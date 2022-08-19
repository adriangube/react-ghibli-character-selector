import {Film} from '../../../domain/film/film';
import {FilmListAdapter} from '../../adapters/film/types';
import {HttpClientDef} from '../../http-client/types';
import {FilmListRepository} from './types';


export const filmListRepository: FilmListRepository = async (adapter: FilmListAdapter, httpClient: HttpClientDef): Promise<Film[]> => {
	const url = `${process.env.REACT_APP_BASE_API_URL}/films`;
	const apiData = await httpClient.get({url});
	return adapter(apiData);
};