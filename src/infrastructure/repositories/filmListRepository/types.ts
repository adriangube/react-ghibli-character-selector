import {Film} from '../../../domain/film/film';
import {FilmListAdapter} from '../../adapters/film/types';
import {HttpClientDef} from '../../http-client/types';

export type FilmListRepository = (adapter: FilmListAdapter, httpClient: HttpClientDef) => Promise<Film[]>;